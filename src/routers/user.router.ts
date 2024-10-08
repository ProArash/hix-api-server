import express from "express";
const router = express.Router();
import { userController } from "../controllers/user.controller";
import { requireRole } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import {
    paramIdValidator,
    userUpdateByIdValidator,
} from "../validators/router.validation";
import { handleErrorValidation } from "../validators/handleErrorValidation";

router.get("/", requireRole(Role.USER), userController.getUsers);
router.get(
    "/:id",
    paramIdValidator,
    handleErrorValidation,
    requireRole(Role.USER),
    userController.getUserById
);
router.post(
    "/",
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.getUserByEmail
);
router.delete(
    "/:id",
    paramIdValidator,
    handleErrorValidation,
    requireRole(Role.ADMIN),
    userController.deleteUserById
);
router.put(
    "/",
    handleErrorValidation,
    requireRole(Role.USER),
    userController.updateUserById
);

export const userRouter = router;
