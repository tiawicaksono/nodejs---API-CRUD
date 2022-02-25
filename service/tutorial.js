const tutorialModel = require("../models/tutorial.model");

class tutorialService {
  createTutorial(tutorialDto) {
    const { title, description, published } = tutorialDto;
    return tutorialModel.insertData(title, description, published);
  }
}

module.exports = new tutorialService();
