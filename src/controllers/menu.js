const MenusModel = require("../models/menu")
const { responseBuilder } = require('../utils/common');

const getAllMenu = async (req, res) => {
  try {
    const data = await MenusModel.getAllMenu()

    const pagination = {
      totalRecord: data.length
    }
    responseBuilder(res, true, 200, data, pagination)
  } catch (error) {
    responseBuilder(res, false, 500, "Server Error : " + error)
  }
}

const getMenuById = async (req, res) => {
  const { menuId } = req.params;

  try {
    const data = await MenusModel.getMenuById(menuId);

    if (data) {
      responseBuilder(res, true, 200, data);
    } else {
      responseBuilder(res, false, 404, "Service not found");
    }
  } catch (error) {
    responseBuilder(res, false, 500, "Server Error: " + error);
  }
};

module.exports = {
  getAllMenu,
  getMenuById,
}