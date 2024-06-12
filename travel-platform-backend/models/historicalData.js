const HistoricalData = (sequelize, DataTypes) => {
  const HistoricalData = sequelize.define(
    "HistoricalData",
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "historical_data",
      timestamps: false,
    }
  );

  return HistoricalData;
};

export default HistoricalData;
