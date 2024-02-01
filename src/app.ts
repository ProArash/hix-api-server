import dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import expressSession from "express-session";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import { routes } from "./routers";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { generateSwagger } from "./swagger";
import { createServer } from "http";
import { ChatServer } from "./chat/chat.server";
import cors from "cors";
import connectPgStore from "connect-pg-simple";

declare module "express-session" {
    interface SessionData {
        userId: number;
    }
}

async function main() {
    await generateSwagger();
    const app = express();
    const httpServer = createServer(app);

    app.use(
        cors({
            origin: "http://127.0.0.1:5500",
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true,
        })
    );

    const pgSession = connectPgStore(expressSession);
    const sessionMiddleware = expressSession({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
        cookie: {
            httpOnly: false,
            secure: true,
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

    const chatServer = new ChatServer(
        httpServer,
        sessionMiddleware
    );

    const PORT = process.env.PORT || 3000;

    app.use(morgan("dev"));
    app.use(cookieParser(process.env.COOKIE_SECRET || "secret"));
    app.use(bodyParser.json());

    app.use(routes);

    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(
            JSON.parse(fs.readFileSync("./src/swagger_output.json").toString())
        )
    );

    httpServer.listen(PORT, () => {
        console.log(`server running on port : ${PORT}....`);
    });
}

main();
