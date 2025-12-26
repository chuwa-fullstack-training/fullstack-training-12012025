const User = require('./db').User;

// INSERT INTO users (firstName, lastName, email) VALUES ('Aaron', 'Zhang', 'test@gmail');
function createUser({ firstName, lastName, email }) {
  return User.create({
    firstName,
    lastName,
    email
  });
}

// SELECT * FROM users;
function findAllUsers() {
  return User.findAll();

  // SELECT firstName, lastName FROM users;
  // return User.findAll({ attributes: ['firstName', 'lastName'] })
}

// SELECT * FROM users WHERE id = <id>;
function findUserById(id, options) {
  return User.findByPk(id, options).then(user => {
    console.log('inside findUserById', user.firstName, user.lastName);
    return Promise.resolve(user);
  });
}

// UPDATE users SET firstName = 'Alex', lastName = 'Chen' WHERE id = <id>;
function updateUser(id) {
  return findUserById(id).then(user => {
    user.firstName = 'Alex';
    user.lastName = 'Chen';
    return user.save();
  });
}

// DELETE FROM users WHERE id = <id>;
function deleteUser(id) {
  return findUserById(id).then(user => {
    return user.destroy();
  });
}

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser
};
