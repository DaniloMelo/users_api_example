import execQuery from "../database/execQuery.js"

export default async function readAllService() {
  try {
    const query = "SELECT * FROM users"
    const data = await execQuery(query)
    return data
  } catch (error) {
    // console.error(`Error when fetching data. ${error.message}`)
    throw error
  }
}
