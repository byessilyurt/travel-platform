const Location = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      place_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year_founded: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
      source: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Locations",
      timestamps: false,
    }
  );

  return Location;
};

export default Location;
