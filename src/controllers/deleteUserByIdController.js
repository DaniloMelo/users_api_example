import deleteUserByIdService from "../services/deleteUserByIdService.js"
import readUserByIdService from "../services/readUserByIdService.js"

export default async function deleteUserById(request, response) {
  try {
    const { id } = request.params

    const [result] = await readUserByIdService(id)

    if (result.length === 0 || result === null || result === undefined) {
      return response.status(404).json({ error: "User not found." })
    }

    await deleteUserByIdService(id)

    response.status(200).json({ message: "User Deleted Successfully." })

  } catch (error) {
    console.error(`Error on deleting user: ${error}`)
    response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
