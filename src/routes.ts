import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middiewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middiewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.post("/login", authenticateUserController.handle);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

export { router };
