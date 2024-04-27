import pool from "./connection.js";

export default async function execQuery(query = "", values = null) {
  try {
    if (values === null) {
      const result = await pool.query(query)
      return result

      // const [rows, fields] = await pool.query(query)
      // return { rows, fields }

    } else {
      const result = await pool.query(query, [...values])
      return result

      // const [rows, fields] = await pool.query(query, [...values])
      // return { rows, fields }
    }
  } catch (error) {
    console.error(`Error when fetching data: ${error.message}`)
    throw error
  }
}
