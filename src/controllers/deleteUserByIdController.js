import deleteUserByIdService from "../services/deleteUserByIdService.js"

export default async function deleteUserById(request, response) {
  try {
    const { id } = request.params

    if (!id || isNaN(id)) {
      response.status(404).json({ error: "User ID not valid or not provided." })
      throw new Error("User ID not valid or not provided.")
    }

    await deleteUserByIdService(id)

    response.status(200).json({ message: "User Deleted Successfully" })

  } catch (error) {
    console.error(`Error on deleting user: ${error.message}`)
    response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
