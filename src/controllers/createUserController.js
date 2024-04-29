import createUserService from "../services/createUserService.js";

export default async function createUserController(request, response) {
  try {
    const { userName, userEmail } = request.body

    if (!userName || !userEmail) {
      response.status(400).json({ error: "User name or Email not provided." })
      throw new Error("User name or Email not provided.")
    }

    const [result] = await createUserService(userName, userEmail)

    const jsonData = {
      id: result.insertId,
      userName,
      userEmail
    }

    return response.status(201).json({
      message: "User created successfully.",
      data: jsonData
    })

  } catch (error) {
    console.error(`Error on creating user: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
