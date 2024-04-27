import express from "express"
import readAllController from "../controllers/readAllController.js"
import readByIdController from "../controllers/readByIdController.js"
import createUserController from "../controllers/createUserController.js"

const router = express.Router()

router.get("/users", readAllController)
router.get("/users/:id", readByIdController)
router.post("/users", createUserController)

export default router
