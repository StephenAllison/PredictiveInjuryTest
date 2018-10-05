// routes/project-routes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const athleteMediators = require("../../models/Athlete-Models/athleteMediators");

// GET route => to get all the Mediators
router.get("/athleteMediators", (req, res, next) => {
  athleteMediators
    .find()
    .populate("athleteMediators")
    .then(athleteMediators => {
      res.json(athleteMediators);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create New Mediating Factors for an Athlete
router.post("/newAthleteMediators", (req, res, next) => {
  athleteMediators
    .create({
      //Physical Factors
      previousInjuryHistory: req.body.previousInjuryHistory,
      fatigue: req.body.fatigue,
      //Psychological Factors
      angerAggression: req.body.angerAggression,
      impulsiveness: req.body.impulsiveness,
      burnout: req.body.burnout,
      //Social
      organizationalPressure: req.body.organizationalPressure,
      socialPressure: req.body.socialPressure
      // owner: req.athlete._id,
      // athleteMediator: []
    })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

//   // GET route => to get a specific project/detailed view
// router.get('/projects/:id', (req, res, next)=>{

//     if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }

//     // our projects have array of tasks' ids and
//     // we can use .populate() method to get the whole task objects
//     //                                   ^
//     //                                   |
//     //                                   |
//     Project.findById(req.params.id).populate('tasks')
//       .then(response => {
//         res.json(response);
//       })
//       .catch(err => {
//         res.json(err);
//       })
//   })

// // PUT route => to update a specific project
// router.put('/projects/:id', (req, res, next)=>{

//     if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }

//     Project.findByIdAndUpdate(req.params.id, req.body)
//       .then(() => {
//         res.json({message: `Project with ${req.params.id} is updated successfully.`});
//       })
//       .catch(err => {
//         res.json(err);
//       })
//   })

//   // DELETE route => to delete a specific project
//   router.delete('/projects/:id', (req, res, next)=>{

//     if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }

//     Project.findByIdAndRemove(req.params.id)
//       .then(() => {
//         res.json({message: `Project with ${req.params.id} is removed successfully.`});
//       })
//       .catch( err => {
//         res.json(err);
//       })
//   })

module.exports = router;
