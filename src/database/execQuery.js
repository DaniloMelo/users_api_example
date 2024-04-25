import pool from "./connection.js";

export default async function execQuery(query = "", values = null) {
  return new Promise((resolve, reject) => {
    if (values === null) {
      pool.query(query, (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results)
      })
    } else {
      pool.query(query, [...values], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results)
      })
    }
  })
}
