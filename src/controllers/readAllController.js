import readAllService from "../services/readAllService.js";

export default async function readAllController(request, response) {
  try {
    const data = await readAllService()

    if (!data || data.length === 0) {
      return response.status(404).json({ error: "No users was found." })
    }
    console.log(data)

    // const jsonResponseData = {
    //   error: null,
    //   results: data.map(user => ({
    //     id: user.id,
    //     userName: user.userName,
    //     userEmail: user.userEmail
    //   }))
    // }

    return response.status(200).json(data)
  } catch (error) {
    // console.error(`Error in readAll controller: ${error.message}`)
    console.error(error)
    return response.status(500).json({ error: error.message || "Internal Server Error" })
  }
}
