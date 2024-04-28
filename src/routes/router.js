import express from "express"
import readAllUsersController from "../controllers/readAllUsersController.js"
import readUserByIdController from "../controllers/readUserByIdController.js"
import createUserController from "../controllers/createUserController.js"
import fullUpdateUserController from "../controllers/fullUpdateUserController.js"
import partialUpdateUserController from "../controllers/partialUpdateUserController.js"
import deleteUserById from "../controllers/deleteUserByIdController.js"

const router = express.Router()

router.get("/users", readAllUsersController)
router.get("/users/:id", readUserByIdController)
router.post("/users", createUserController)
router.put("/users/:id", fullUpdateUserController)
router.patch("/users/:id", partialUpdateUserController)
router.delete("/users/:id", deleteUserById)

export default router
