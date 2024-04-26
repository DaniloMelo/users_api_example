import express from "express"
import readAllController from "../controllers/readAllController.js"
import createUserController from "../controllers/createUserController.js"

const router = express.Router()

router.get("/users", readAllController)
router.post("/users", createUserController)

export default router
