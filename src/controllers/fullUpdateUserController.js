import fullUpdateUserService from "../services/fullUpdateUserService.js"

export default async function fullUpdateUserController(request, response) {
  try {
    const { userName, userEmail } = request.body
    const { id } = request.params

    if (!userName || !userEmail) {
      return response.status(400).json({ error: "User name or email not provided." })
    }

    if (!id || isNaN(id)) {
      return response.status(400).json({ error: "User ID not provided or invalid" })
    }

    await fullUpdateUserService(userName, userEmail, id)

    const jsonData = {
      id,
      userName,
      userEmail
    }

    return response.status(200).json(jsonData)

  } catch (error) {
    console.error(`Error on full update user: ${error.message}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
