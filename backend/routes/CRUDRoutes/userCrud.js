// routes/project-routes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userProfile = require("../../models/user");

// GET route => to Get Full Athlete Profile
router.get("/userProfile", (req, res, next) => {
  userProfile
    .find()
    .then(userProfile => {
      res.json(userProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific project/detailed view
router.get("/userProfile/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // our projects have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //                                   |
  userProfile
    .findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific project
router.put("/userProfile/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  userProfile
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Profile ${
          req.params.id
        } has been successfully updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

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
