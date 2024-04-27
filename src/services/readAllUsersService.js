import execQuery from "../database/execQuery.js"

export default async function readAllUsersService() {
  try {
    const query = "SELECT * FROM users"
    const data = await execQuery(query)
    return data

  } catch (error) {
    throw error
  }
}
