import partialUpdateUserService from "../services/partialUpdateUserService.js";
import readUserByIdService from "../services/readUserByIdService.js"

export default async function (request, response) {
  try {
    const { id } = request.params
    const { userName, userEmail } = request.body

    let bodyValues = { name: userName, email: userEmail }

    await partialUpdateUserService(id, bodyValues)

    const [data] = await readUserByIdService(id)

    response.status(200).json(data)

  } catch (error) {
    console.error(`Error on partial update user: ${error.message}`)
    response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
