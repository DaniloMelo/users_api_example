import execQuery from "../database/execQuery.js";

export default async function deleteUserByIdService(id) {
  try {
    const query = "DELETE FROM users WHERE ID = ?"
    const data = await execQuery(query, [id])
    return data

  } catch (error) {
    throw error
  }
}
