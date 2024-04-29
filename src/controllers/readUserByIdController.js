import readUserByIdService from "../services/readUserByIdService.js";

export default async function readUserByIdController(request, response) {
  try {
    const { id } = request.params

    const [result] = await readUserByIdService(id)

    if (result.length === 0 || result === null || result === undefined) {
      return response.status(404).json({ error: "User not found" })
    }

    return response.status(200).json({
      message: "User search completed successfully.",
      data: result
    })

  } catch (error) {
    console.error(`Error when fetching an user by ID: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
