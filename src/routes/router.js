import express from "express"

const router = express.Router()

router.get("/users", (request, response) => {
  response.send(`<h1>Users Page</h1>`)
})

export default router
