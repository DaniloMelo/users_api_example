import readByIdService from "../services/readByIdService.js";

export default async function readByIdController(request, response) {
  try {
    const id = request.params.id

    if (!id || isNaN(id)) {
      return response.status(404).json({ error: "User ID not provided or invalid." })
    }

    const data = await readByIdService(id)


    // const jsonResponseData = {
    //   error: null,
    //   results: {
    //     id: data.id,
    //     userName: data.userName,
    //     userEmail: data.userEmail
    //   }
    // }

    return response.status(200).json(data)
  } catch (error) {
    console.error(error)
    return response.status(500).json({ error: error.message || "Internal Server Error." })
  }
}
