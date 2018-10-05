// routes/project-routes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const athleteModerators = require("../../models/Athlete-Models/athleteModerators");

// GET route => to get all the Moderators
router.get("/athleteModerators", (req, res, next) => {
  athleteModerators
    .find()
    .populate("athleteModerators")
    .then(athleteModerators => {
      res.json(athleteModerators);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create New Moderating Factors for an Athlete
router.post("/newAthleteModerators", (req, res, next) => {
  athleteModerators
    .create({
      //Physical Factors
      biomechanicsTechnique: req.body.biomechanicsTechnique,
      physicalConditioning: req.body.physicalConditioning,
      //Psychological Factors
      hardinessResilience: req.body.hardinessResilience,
      athleticCopingSkills: req.body.athleticCopingSkills,
      concentrationFocus: req.body.concentrationFocus,
      //Social
      organizationalSupport: req.body.organizationalSupport,
      socialSupport: req.body.socialSupport
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

// module.exports = router;
