import fullUpdateUserService from "../services/fullUpdateUserService.js"

export default async function fullUpdateUserController(request, response) {
  try {
    const { userName, userEmail } = request.body
    const { id } = request.params

    if (!userName || !userEmail) {
      response.status(400).json({ error: "User name or email not provided." })
      throw new Error("User name or Email not provided.")
    }

    if (!id || isNaN(id)) {
      return response.status(400).json({ error: "User ID not provided or invalid." })
    }

    await fullUpdateUserService(userName, userEmail, id)

    const jsonData = {
      id,
      userName,
      userEmail
    }

    return response.status(200).json({
      message: "User fully updated Successfully.",
      data: jsonData
    })

  } catch (error) {
    console.error(`Error on full update user: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
