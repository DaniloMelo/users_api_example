import express from "express"

const app = express()

app.get("/hello", (request, response) => {
  response.send(`<h1>Hello World!!!</h1>`)
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3001}`);
})
