const { createConnection } = require("typeorm");

async function createDb() {
  const connection = await createConnection();
  console.log("connection created.");
  const queryRunner = connection.createQueryRunner();
  try {
    await queryRunner.createDatabase("formbuilder-graphql-db");
    console.log("Database created successfully.");
  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    await queryRunner.release();
    await connection.close();
  }
}createDb();
