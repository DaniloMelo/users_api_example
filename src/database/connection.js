import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
})

pool.on("connection", () => {
  console.log(`New connection acquired from the pool on database: ${process.env.DB_NAME}`)
})

pool.on("error", (error) => {
  console.log(`Database error: ${error}`);
})

export default pool

// import mysql from "mysql2"

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// })

// pool.on("connection", () => {
//   console.log(`New connection acquired from the pool on database: ${process.env.DB_NAME}`)
// })

// pool.on("error", (error) => {
//   console.log(`Database error: ${error}`);
// })

// export default async function execQuery(query = "", values = null) {
//   return new Promise((resolve, reject) => {
//     if (values === null) {
//       pool.query(query, (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results)
//       })
//     } else {
//       pool.query(query, [...values], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results)
//       })
//     }
//   })
// }