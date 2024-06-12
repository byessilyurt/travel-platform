const Comments = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "comments",
      timestamps: false,
    }
  );

  return Comments;
};

export default Comments;
