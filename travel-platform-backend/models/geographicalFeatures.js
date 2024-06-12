const GeographicalFeatures = (sequelize, DataTypes) => {
  const GeographicalFeatures = sequelize.define(
    "GeographicalFeatures",
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
      feature_type: {
        type: DataTypes.STRING,
      },
      latitude: {
        type: DataTypes.FLOAT,
      },
      longitude: {
        type: DataTypes.FLOAT,
      },
      elevation: {
        type: DataTypes.FLOAT,
      },
      area_size: {
        type: DataTypes.FLOAT,
      },
      population: {
        type: DataTypes.INTEGER,
      },
      place_spatial: {
        type: DataTypes.GEOMETRY("POINT"),
      },
      accessibility_info: {
        type: DataTypes.TEXT,
      },
      source: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "geographicalfeatures",
      timestamps: false,
    }
  );

  return GeographicalFeatures;
};

export default GeographicalFeatures;
