import express from "express"
import readAllUsersController from "../controllers/readAllUsersController.js"
import readByIdController from "../controllers/readByIdController.js"
import createUserController from "../controllers/createUserController.js"
import fullUpdateUserController from "../controllers/fullUpdateUserController.js"

const router = express.Router()

router.get("/users", readAllUsersController)
router.get("/users/:id", readByIdController)
router.post("/users", createUserController)
router.put("/users/:id", fullUpdateUserController)

export default router
