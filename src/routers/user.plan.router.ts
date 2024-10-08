import express from "express";
import { requireRole } from "../middlewares/auth.middleware";
import { userPlanController } from "../controllers/user.plan.controller";
const router = express.Router();

router.get("/", requireRole("USER"), userPlanController.getUserPlans);
router.get(
    "/user/:id",
    requireRole("ADMIN"),
    userPlanController.getUserPlansById
);
router.get(
    "/current",
    requireRole("USER"),
    userPlanController.getCurrentUserPlan
);
router.get("/:id", requireRole("USER"), userPlanController.getUserPlanById);
router.put("/:id", requireRole("USER"), userPlanController.updateUserPlanById);
router.post(
    "/generate_apikey/:id",
    requireRole("USER"),
    userPlanController.generateApiKeyById
);

export const userPlanRouter = router;
