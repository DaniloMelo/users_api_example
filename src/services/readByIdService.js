import execQuery from "../database/execQuery.js"

export default async function readByIdService(id) {
  try {
    const userId = id
    const query = "SELECT * FROM users WHERE ID = ?"
    const data = await execQuery(query, [userId])

    if (data.length === 0) {
      throw new Error("User ID invalid or not provided.")
    }

    return data;
  } catch (error) {
    throw error
  }
}
