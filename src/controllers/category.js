const CategoryModel = require("../models/category")
const responseBuilder = require('../utils/common');

const getAllCategory = async (req, res) => {
  try {
    const data = await CategoryModel.getAllCategory()

    const pagination = {
      totalRecord: data.length
    }
    responseBuilder(res, true, 200, data, pagination)
  } catch (error) {
    responseBuilder(res, false, 500, { message: "Server Error", error: error.message });
  }
}

module.exports = {
  getAllCategory,
}