import execQuery from "../database/execQuery.js";

export default async function fullUpdateUserService(name, email, id) {
  try {
    const query = "UPDATE users SET userName = ?, userEmail = ? WHERE ID = ?"
    const data = await execQuery(query, [name, email, id])
    return data
  } catch (error) {
    throw error
  }
}
