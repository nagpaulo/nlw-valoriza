import { Router } from "express";
import { AuthenticationController } from "./controllers/AuthenticationController";
import { ComplimentController } from "./controllers/ComplimentController";
import { TagController } from "./controllers/TagController";
import { UserController } from "./controllers/UserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";

const router = Router();
const userController = new UserController();
const tagController = new TagController();
const authenticationController = new AuthenticationController();
const complimentController = new ComplimentController();

router.post("/users", userController.handleCreate);
router.post("/tags", ensureAuthentication, ensureAdmin, tagController.handleCreate);
router.post("/auth", authenticationController.handleAuthentication);
router.post("/compliments", ensureAuthentication, complimentController.handleCreate);

export { router };