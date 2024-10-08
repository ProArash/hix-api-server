import dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import expressSession from "express-session";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

import { routes } from "./routers";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { generateSwagger } from "./swagger";
import { createServer } from "https";
import { ChatServer } from "./chat/chat.server";
import cors from "cors";
import connectPgStore from "connect-pg-simple";
import helmet from "helmet";
import umbress from "umbress";

declare module "express-session" {
    interface SessionData {
        userId: string;
        userPlanId: string;
        targetUserId: number;
        socketId: string;
        isOperator: boolean;
    }
}

async function main() {
    const privatekey = fs.readFileSync("./certs/key.pem");
    const certificate = fs.readFileSync("./certs/cert.pem");
    await generateSwagger();
    const app = express();
    const httpServer = createServer(
        { key: privatekey, cert: certificate },
        app
    );

    app.disable("x-powered-by");
    app.use(
        helmet({
            contentSecurityPolicy: false,
        })
    );
    // app.use(
    //     umbress({
    //         rateLimiter: { enabled: true },

    //     })
    // );
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    const pgSession = connectPgStore(expressSession);
    const sessionMiddleware = expressSession({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
        cookie: {
            path: "/",
            httpOnly: true,
            secure: false,
            sameSite: "none",
        },
        name: "sid",
        store: new pgSession({
            createTableIfMissing: true,
            tableName: "chatuser_sessions",
            conString: process.env.DATABASE_URL,
        }),
    });
    app.use(sessionMiddleware);

    const PORT = process.env.PORT || 3000;

    app.use(morgan("dev"));
    app.use(cookieParser(process.env.COOKIE_SECRET || "secret"));
    app.use(bodyParser.json({ limit: "50mb" }));

    const chatServer = new ChatServer(httpServer, app, sessionMiddleware);

    app.use(express.static(path.join(__dirname, "view")));

    app.use("/", routes);

    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(
            JSON.parse(fs.readFileSync("./src/swagger_output.json").toString())
        )
    );

    app.get("/", (req: Request, res: Response) => {
        res.redirect("https://portal.hixdm.com/dashboard");
    });

    httpServer.listen(PORT, () => {
        console.log(`server running on port : ${PORT}....`);
    });
}

main();
