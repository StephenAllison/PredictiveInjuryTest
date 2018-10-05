// routes/project-routes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const medStaffProfile = require("../../models/medStaff");

// GET route => to Get Full medStaff Profile
router.get("/medStaffProfile", (req, res, next) => {
  medStaffProfile
    .find()
    .then(medStaffFullProfile => {
      res.json(medStaffFullProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new medStaff Profile
router.post("/createNewMedStaff", (req, res, next) => {
  medStaffProfile
    .create({
      sport: req.body.sport,
      league: req.body.league,
      team: req.body.team,
      role: req.body.role,
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});
//GET route => Find medStaff By ID
router.get("/medStaff/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  medStaffProfile
    .findById(req.params.id)
    .then(response => {
      res.json(response);
      console.log(response);
    })
    .catch(err => {
      res.json(err);
      console.log(err);
    });
});
//PUT route => Update medStaff
router.put("/updatemedStaffProfile/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  medStaffProfile
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Profile ${req.params.id} has been updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});
//Delete route => Delete medStaff
router.delete("/deletemedStaff/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  medStaffProfile
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `medStaff with ${req.params.id} has been successfully removed.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
