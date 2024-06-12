export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("Users", {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    profile_info: {
      type: Sequelize.TEXT,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Users");
};
