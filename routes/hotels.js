import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// CRUD OPERATIONS
// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    // res.send("zala re ");
    const savedHotel = await newHotel.save();
    // console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new : true});
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// DELETE
// GET
// GET ALL

export default router;
