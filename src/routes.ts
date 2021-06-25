import { Router } from "express";
import { TagController } from "./controllers/TagController";
import { UserController } from "./controllers/UserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();
const userController = new UserController();
const tagController = new TagController();

router.post("/users", userController.handleCreate);
router.post("/tags", ensureAdmin, tagController.handleCreate);

export { router };