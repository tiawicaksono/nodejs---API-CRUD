const tutorialModel = require("../models/tutorial.model");
const tutorialService = require("../service/tutorial");

class tutorialController {
  async getAllPublished(req, res) {
    try {
      const tutorial = await tutorialModel.getAllPublished();
      res.status(200).json({
        status: "success",
        data: tutorial,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  }

  async getAll(req, res) {
    try {
      const tutorial = await tutorialModel.getAll();
      res.status(200).json({
        status: "success",
        data: tutorial,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        error: error.message,
        // data: req.body,
      });
    }
  }

  async getById(req, res) {
    try {
      const tutorial = await tutorialModel.getById(req.params.id);
      if (!tutorial || tutorial.length === 0) {
        res.status(201).json({
          status: "warning",
          data: "ID not found",
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: tutorial,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  }

  async insertData(req, res) {
    try {
      const tutorial = await tutorialService.createTutorial(req.body);
      res.status(200).json({
        status: "success",
        data: req.body,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  }

  async updateData(req, res) {
    try {
      const tutorial = await tutorialModel.updateData(req.body, req.params.id);
      res.status(200).json({
        status: "success",
        data: req.body,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  }
}

module.exports = new tutorialController();
