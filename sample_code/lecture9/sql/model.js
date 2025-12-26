const { DataTypes } = require('sequelize');

function defineModels(sequelize) {
  const User = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  const Post = sequelize.define('posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      defaultValue: 'default content'
    }
  });

  // Tie posts to their author and expose both directions
  Post.Author = Post.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
  User.Posts = User.hasMany(Post, { as: 'posts', foreignKey: 'authorId' });

  return { User, Post };
}

module.exports = defineModels;
