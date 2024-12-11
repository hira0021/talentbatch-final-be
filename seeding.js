const pool = require("./src/config/database");
const menuData = require("./menu.json");
const menuCategoryData = require('./menuCategory.json');

async function seedMenuCategory() {
  let newData = menuCategoryData.map((el) => {
    return `('${el.name}')`;
  });
  let newDataToInsert = newData.join(",");

  let seedDataQuery = `
    INSERT INTO menu_category ("category_name")
    VALUES ${newDataToInsert}
  `;

  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table menu_category");
  } catch (error) {
    console.log(error);
  }
}

async function seedMenu() {
  let newData = menuData.map((el) => {
    return `('${el.name}', ${el.price}, '${el.imgUrl}', '${el.category}', '${el.detail}')`;
  });
  let newDataToInsert = newData.join(",");
  
  let seedDataQuery = `
    INSERT INTO Menu ("menu_name", "price", "imgUrl", "category", "description")
    VALUES ${newDataToInsert}
  `;
  
  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table menu");
  } catch (error) {
    console.log(error);
  }
}

function runSeeding() {
  seedMenuCategory();
  seedMenu();
}

runSeeding();