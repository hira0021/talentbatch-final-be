const dbPool = require("../config/database")

const getAllCategory = async () => {
  const SQLQuery = "SELECT * FROM menu_category"

  try {
    const result = await dbPool.query(SQLQuery);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCategory,
}