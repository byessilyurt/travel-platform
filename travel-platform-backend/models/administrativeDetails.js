import { DataTypes } from "sequelize";

const AdministrativeDetails = (sequelize, DataTypes) => {
  const AdministrativeDetails = sequelize.define(
    "AdministrativeDetails",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      local_gov_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      local_gov: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      administrative_level: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "administrativeDetails",
      timestamps: false,
    }
  );

  return AdministrativeDetails;
};

export default AdministrativeDetails;
