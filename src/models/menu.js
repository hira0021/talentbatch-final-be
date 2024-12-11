const dbPool = require("../config/database")

const getAllMenu = async () => {
  const SQLQuery = "SELECT * FROM menu"

  try {
    const result = await dbPool.query(SQLQuery);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

const getMenuById = async (menuId) => {
  const SQLQuery = `
      SELECT * FROM menu
      WHERE id = $1
      LIMIT 1
  `;

  try {
    const result = await dbPool.query(SQLQuery, [menuId]);
    return result.rows[0] || null;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMenu,
  getMenuById
}