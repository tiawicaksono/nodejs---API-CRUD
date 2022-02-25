const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const model = require("../models/user.model");
const service = require("../service/user");

class userController {
  // async getAll(req, res) {
  //   try {
  //     const tutorial = await model.getAll();
  //     res.status(200).json({
  //       status: "success",
  //       data: tutorial,
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       status: "error",
  //       error: error.message,
  //       // data: req.body,
  //     });
  //   }
  // }

  async loginUser(req, res) {
    try {
      const user = await model.getByEmail(req.body.email);
      if (!user || user.length === 0) {
        res.status(201).json({
          status: "warning",
          data: "email not found",
        });
        return;
      }
      // res.status(200).json({
      //   status: "success",
      //   data: user,
      // });
      const comparePassword = compareSync(req.body.password, user[0].password);
      // console.log(user[0].password);
      if (comparePassword) {
        // result.password = undefined;
        const jsontoken = sign({ comparePassword: user }, "qwe123", {
          expiresIn: "1h",
        });

        return res.status(200).send({
          status: "success",
          message: "login success",
          token: jsontoken,
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "invalid email or password",
      });
    }
  }

  async getByEmail(req, res) {
    try {
      const user = await model.getByEmail(req.body.email);
      if (!user || user.length === 0) {
        res.status(201).json({
          status: "warning",
          data: "email not found",
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: user,
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
      // const user = await model.getByEmail(req.body.email);
      // const emailNotFound = user.length;
      // console.log(emailNotFound);
      // if (emailNotFound !== 0) {
      //   res.status(201).json({
      //     status: "warning",
      //     data: "email already registered",
      //   });
      //   return;
      // }
      const email = await model.getByEmail(req.body.email);
      // console.log(email.length);
      if (email.length) {
        res.status(200).json({
          status: "warning",
          data: "email registered",
        });
        return;
      }
      await service.createUser(req.body);
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
      const user = await model.updateData(req.body, req.params.id);
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

module.exports = new userController();
