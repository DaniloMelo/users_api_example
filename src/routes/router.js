import express from "express"
import readAllController from "../controllers/readAllController.js"

const router = express.Router()

router.get("/users", readAllController)

export default router
