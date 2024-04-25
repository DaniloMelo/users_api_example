import pool from "./connection.js";

export async function execQuery(query = "", values = null) {
  try {
    if (values === null) {
      const results = await pool.query(query)
      return results
    } else {
      const results = await pool.query(query, [...values])
      return results
    }
  } catch (error) {
    throw error
  }
}
