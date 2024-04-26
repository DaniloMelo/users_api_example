import pool from "./connection.js";

export default async function execQuery(query = "", values = null) {
  try {
    if (values === null) {
      return await pool.query(query)
    } else {
      return await pool.query(query, [...values])
    }
  } catch (error) {
    // console.error(`Error executing query: ${query}. Error: ${error.message}`)
    throw error
  }
}
