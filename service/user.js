const tutorialModel = require("../models/tutorial.model");
const userModel = require("../models/user.model");

class UserService {
  createUser(userDto) {
    const { firstName, lastName, email, password } = userDto;
    return userModel.insertData(firstName, lastName, email, password);
  }
}

module.exports = new UserService();
