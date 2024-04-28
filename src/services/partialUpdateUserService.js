import execQuery from "../database/execQuery.js";

export default async function partialUpdateUserService(id, objValues) {
  try {
    const values = []
    let query = "UPDATE users SET "

    if (objValues.name !== undefined) {
      values.push(objValues.name)
      query += "userName = ?, "
    }

    if (objValues.email !== undefined) {
      values.push(objValues.email)
      query += "userEmail = ?, "
    }

    query = query.slice(0, -2) // remove last comma from query string

    query += " WHERE ID = ?"

    values.push(parseInt(id))

    const data = await execQuery(query, values)

    return data

  } catch (error) {
    throw error
  }
}
