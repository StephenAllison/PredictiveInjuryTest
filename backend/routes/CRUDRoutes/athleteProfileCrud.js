// routes/project-routes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const athleteProfile = require("../../models/Athlete-Models/athleteProfile");

// GET route => to Get Full Athlete Profile
router.get("/athleteProfile", (req, res, next) => {
  athleteProfile
    .find()
    // .populate("moderators")
    // .populate("mediators")
    .then(athleteFullProfile => {
      res.json(athleteFullProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new Athlete Profile
router.post("/newAthlete", (req, res, next) => {
  athleteProfile
    .create({
      sport: req.body.sport,
      league: req.body.league,
      team: req.body.team,
      name: req.body.name,
      position: req.body.position
    })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.get("/athlete/:id", (req, res, next) => {
//   // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//   //     res.status(400).json({ message: "Specified id is not valid" });
//   //     return;
//   //   }

//   athleteProfile
//     .findById(req.params.id)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// GET route => to get a specific project/detailed view
router.get("/athlete/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // our projects have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //                                   |
  athleteProfile
    .findById(req.params.id)
    // .populate("moderators")
    // .populate("mediators")
    .then(response => {
      //   console.log(req.params.id);
      res.json(response);
      console.log(response);
      //   res.json(response);
    })
    .catch(err => {
      res.json(err);
      console.log(err);
    });
});

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
