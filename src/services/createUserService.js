import execQuery from "../database/execQuery.js"

export default async function createUserService(userName, userEmail) {
  try {
    const query = "INSERT INTO users (userName, userEmail) VALUES (?, ?)"
    const data = await execQuery(query, [userName, userEmail])
    return data

  } catch (error) {
    throw error
  }
}
