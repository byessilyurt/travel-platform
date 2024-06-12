const Post = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "Posts",
      timestamps: false,
    }
  );

  return Post;
};

export default Post;
