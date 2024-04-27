import pool from "./connection.js";

export default async function execQuery(query = "", values = null) {
  try {
    if (values === null) {
      const data = await pool.query(query)
      return data[0]
    } else {
      const data = await pool.query(query, [...values])
      return data[0]
    }
  } catch (error) {
    console.error(`Error executing query: ${query}. Error: ${error.message}`)
    throw error
  }
}
