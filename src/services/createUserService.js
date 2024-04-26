import execQuery from "../database/execQuery.js"

export default async function createUserService(userName, userEmail) {
  try {
    const name = userName;
    const email = userEmail;
    const query = "INSERT INTO users (userName, userEmail) VALUES (?, ?)"
    const data = await execQuery(query, [name, email])
    return data
  } catch (error) {
    throw error
  }
}
