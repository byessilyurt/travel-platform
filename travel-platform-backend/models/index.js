import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath } from "url";
import config from "../config/config.mjs";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];
const db = {};

let sequelize;
if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
  );
}

const importModel = async (filePath) => {
  const { default: model } = await import(filePath);
  return model(sequelize, DataTypes);
};

const initializeModels = async () => {
  const files = fs.readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  });

  for (const file of files) {
    const model = await importModel(path.join(__dirname, file));
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
};

await initializeModels();

export { sequelize };
export default db;
