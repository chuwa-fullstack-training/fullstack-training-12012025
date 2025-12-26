const { sequelize, Post } = require('./db');
const {
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser
} = require('./user');

// Demo 1
process.env.DEMO_CASE === '1' &&
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(() => {
      console.error('Unable to connect to the database: ');
    })
    .finally(() => {
      sequelize.close();
    });

// Demo 2: select all users
process.env.DEMO_CASE === '2' &&
  sequelize
    .sync()
    .then(() => findAllUsers())
    .then(users => {
      users.forEach(user => {
        console.log(user.id, user.firstName, user.lastName);
      });
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      sequelize.close();
    });

// Demo 3: create a new user
process.env.DEMO_CASE === '3' &&
  sequelize
    .sync({ force: true })
    .then(() =>
      createUser({
        firstName: 'something',
        lastName: 'new',
        email: 'unknown@test.com'
      })
    )
    .then(data => {
      console.log(JSON.stringify(data));
      console.log('created successfully!');
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      sequelize.close();
    });

// Demo 4: update a user
process.env.DEMO_CASE === '4' &&
  sequelize
    .sync({ force: false })
    .then(() => updateUser(1))
    .then(updatedUser => {
      console.log('updated user:', JSON.stringify(updatedUser));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      sequelize.close();
    });

// Demo 5: delete a user
process.env.DEMO_CASE === '5' &&
  sequelize
    .sync({ force: false })
    .then(() => deleteUser(1))
    .then(() => {
      console.log('deleted user with id 1');
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      sequelize.close();
    });

// Demo 6: create a post
process.env.DEMO_CASE === '6' &&
  sequelize
    .sync({ force: true })
    .then(() =>
      createUser({
        firstName: 'Post',
        lastName: 'Author',
        email: 'post.author@test.com'
      })
    )
    .then(() => {
      return Post.create({
        title: 'First Post',
        content: 'This is the content of the first post.',
        authorId: 1
      });
    })
    .then(post => {
      console.log('Created Post:', JSON.stringify(post));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      sequelize.close();
    });

// Demo 7: fetch a post with its author
process.env.DEMO_CASE === '7' &&
  sequelize
    .sync({ force: false })
    .then(() => {
      return Post.findByPk(1, { include: 'author' });
    })
    .then(post => {
      console.log('Post Title:', post.title);
      console.log('Post Content:', post.content);
      console.log('Author Name:', post.author.firstName, post.author.lastName);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      sequelize.close();
    });

// Demo 8: fetch a user with their posts
process.env.DEMO_CASE === '8' &&
  sequelize
    .sync({ force: true })
    .then(() => {
      return createUser({
        firstName: 'Multi',
        lastName: 'Poster',
        email: 'multi.poster@test.com'
      });
    })
    .then(user => {
      return Post.bulkCreate([
        {
          title: 'Post 1',
          content: 'Content for post 1',
          authorId: user.id
        },
        {
          title: 'Post 2',
          content: 'Content for post 2',
          authorId: user.id
        }
      ]);
    })
    .then(() => {
      return findUserById(1, { include: 'posts' });
    })
    .then(user => {
      console.log('User:', user.firstName, user.lastName);
      user.posts.forEach(post => {
        console.log('Post Title:', post.title);
        console.log('Post Content:', post.content);
      });
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      sequelize.close();
    });
