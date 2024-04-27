import express from "express"
import readAllController from "../controllers/readAllController.js"
import readByIdController from "../controllers/readByIdController.js"
import createUserController from "../controllers/createUserController.js"
import fullUpdateUserController from "../controllers/fullUpdateUserController.js"

const router = express.Router()

router.get("/users", readAllController)
router.get("/users/:id", readByIdController)
router.post("/users", createUserController)
router.put("/users/:id", fullUpdateUserController)

export default router
