const AlternativeNames = (sequelize, DataTypes) => {
  const AlternativeNames = sequelize.define(
    "AlternativeNames",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      alternative_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      alt_pronunciation: {
        type: DataTypes.STRING,
      },
      is_current: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "alternativenames",
      timestamps: false,
    }
  );

  return AlternativeNames;
};

export default AlternativeNames;
