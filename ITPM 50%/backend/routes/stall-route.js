const express = require("express");
const Stall = require("../model/stall.modal");

const router = express.Router();

// Get all stalls
router.get("/stalls", async (req, res) => {
  try {
    const stalls = await Stall.find();
    res.json(stalls);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching stalls", error: error.message });
  }
});

// Create stalls (initial setup)
router.post("/stalls", async (req, res) => {
  try {
    const createdStalls = [];
    for (let i = 1; i <= 25; i++) {
      const newStall = await Stall.create({
        stallNumber: i,
        status: "available",
      });
      createdStalls.push(newStall);
    }
    res.json(createdStalls);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating stalls", error: error.message });
  }
});

// Update stall status
router.put("/stalls/book", async (req, res) => {
  const { stallIds } = req.body;

  try {
    const updatedStalls = await Stall.updateMany(
      { _id: { $in: stallIds } },
      { $set: { status: "booked" } },
      { multi: true, new: true }
    );
    res.json(updatedStalls);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating stall status", error: error.message });
  }
});

// Delete stalls
router.delete("/stalls/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedStall = await Stall.findByIdAndUpdate(
      id,
      { $set: { status: "available" } },
      { new: true }
    );

    if (!updatedStall) {
      return res.status(404).json({ message: "Stall not found" });
    }

    res.json({ message: "Stall status updated successfully", updatedStall });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating stall status", error: error.message });
  }
});

module.exports = router;
