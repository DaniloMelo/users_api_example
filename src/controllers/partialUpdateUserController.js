import partialUpdateUserService from "../services/partialUpdateUserService.js";
import readUserByIdService from "../services/readUserByIdService.js"

export default async function partialUpdateUserController(request, response) {
  try {
    const { id } = request.params
    const { userName, userEmail } = request.body

    const [result] = await readUserByIdService(id)

    if (result.length === 0 || result === null || result === undefined) {
      return response.status(404).json({ error: "User not found." })
    }

    const bodyValues = { name: userName, email: userEmail }

    await partialUpdateUserService(id, bodyValues)

    const [updatedResult] = await readUserByIdService(id)

    response.status(200).json({
      message: "User partially updated successfully.",
      data: updatedResult
    })

  } catch (error) {
    console.error(`Error on partial update user: ${error}`)
    response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
