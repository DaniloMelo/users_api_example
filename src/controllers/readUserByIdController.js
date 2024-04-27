import readUserByIdService from "../services/readUserByIdService.js";

export default async function readUserByIdController(request, response) {
  try {
    const { id } = request.params

    if (!id || isNaN(id)) {
      return response.status(404).json({ error: "User ID not provided or invalid." })
    }

    const [data] = await readUserByIdService(id)

    return response.status(200).json(data)

  } catch (error) {
    console.error(`Error when fetching an user by ID: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
