import execQuery from "../database/execQuery.js"

export default async function readUserByIdService(id) {
  try {
    const query = "SELECT * FROM users WHERE ID = ?"
    const data = await execQuery(query, [id])
    return data

  } catch (error) {
    throw error
  }
}
