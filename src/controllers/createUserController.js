import createUserService from "../services/createUserService.js";

export default async function createUserController(request, response) {
  try {
    const { userName, userEmail } = request.body

    if (!userName || !userEmail) {
      return response.status(400).json({ error: "User or Email not provided." })
    }

    const data = await createUserService(userName, userEmail)

    const jsonResponseData = {
      error: null,
      results: {
        id: data.id,
        userName: userName,
        userEmail: userEmail
      }
    }

    return response.json(jsonResponseData)

  } catch (error) {
    console.error(error)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
