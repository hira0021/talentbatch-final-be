const pool = require('./src/config/database')

const createTableMenuCategory = `
  CREATE TABLE IF NOT EXISTS menu_category (
    "id" SERIAL PRIMARY KEY,
    "category_name" VARCHAR(50) UNIQUE NOT NULL
  );
`;

const createTableMenu = `
  CREATE TABLE IF NOT EXISTS menu (
    "id" SERIAL PRIMARY KEY,
    "menu_name" VARCHAR(50) NOT NULL,
    "price" FLOAT NOT NULL,
    "imgUrl" TEXT,
    "description" TEXT,
    "category" INT NOT NULL,
    CONSTRAINT fk_category
      FOREIGN KEY ("category")
      REFERENCES menu_category("id")
      ON DELETE SET NULL
      ON UPDATE CASCADE
  );
`;

async function createTables() {
    try {
        await pool.query(createTableMenuCategory);
        console.log('Table `menu_category` created successfully.');

        await pool.query(createTableMenu);
        console.log('Table `menu` created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
}

createTables();
