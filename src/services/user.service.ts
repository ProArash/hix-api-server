import { User } from "@prisma/client";
import { prismaClient } from "../utils/prisma.client";
import { Keys, prismaExclude } from "../utils/prisma.exclude";

export const userService = {
    getUserById: async <K extends Keys<"User">>(id: number, exclude: K[]) => {
        return await prismaClient().user.findUnique({
            where: {
                id: Number(id),
            },
            select: prismaExclude("User", exclude),
        });
    },
    getUserByEmail: async <K extends Keys<"User">>(
        email: string,
        exclude: K[]
    ) => {
        return await prismaClient().user.findUnique({
            where: {
                email,
            },
            select: prismaExclude("User", exclude),
        });
    },
    createUser: async <K extends Keys<"User">>(
        email: string,
        password: string,
        name: string,
        exclude: K[]
    ) => {
        try {
            console.log("user created.");

            return await prismaClient().user.create({
                data: {
                    email,
                    password,
                    name,
                },
                select: prismaExclude("User", exclude),
            });
        } catch (error) {
            console.log(error);

            return null;
        }
    },
    updateUser: async <K extends Keys<"User">>(
        newUser: User,
        exclude: K[]
    ): Promise<User | null> => {
        try {
            console.log("user updated.");
            return await prismaClient().user.update({
                data: newUser,
                where: {
                    email: newUser.email,
                },
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    },
};
