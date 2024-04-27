import readAllUsersService from "../services/readAllUsersService.js";

export default async function readAllUsersController(request, response) {
  try {
    const [data] = await readAllUsersService()

    if (!data || data.length === 0) {
      return response.status(404).json({ error: "No users was found." })
    }

    return response.status(200).json(data)

  } catch (error) {
    console.error(`Error when feching all users: ${error}`)
    return response.status(500).json({ error: error.message || "Internal Server Error" })
  }
}
