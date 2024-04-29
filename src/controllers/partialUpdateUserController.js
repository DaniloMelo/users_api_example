import partialUpdateUserService from "../services/partialUpdateUserService.js";
import readUserByIdService from "../services/readUserByIdService.js"

export default async function (request, response) {
  try {
    const { id } = request.params
    const { userName, userEmail } = request.body

    // if (!userName || !userEmail) {
    //   response.status(400).json({ error: "User name or Email not provided." })
    //   throw new Error("User name or Email not provided.")
    // }

    if (!id || isNaN(id)) {
      response.status(400).json({ error: "User ID not provided or invalid." })
      throw new Error("User ID not provided or invalid. ")
    }

    let bodyValues = { name: userName, email: userEmail }

    await partialUpdateUserService(id, bodyValues)

    const [result] = await readUserByIdService(id)

    response.status(200).json({
      message: "User partially updated successfully.",
      data: result
    })

  } catch (error) {
    console.error(`Error on partial update user: ${error}`)
    response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
