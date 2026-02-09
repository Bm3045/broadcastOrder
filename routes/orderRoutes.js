const express = require("express");
const Driver = require("../models/Driver");
const getNearbyPincodes = require("../utils/getNearbyPincodes");
const sendSMS = require("../utils/sendSMS");

const router = express.Router();

router.post("/broadcastOrder", async (req, res) => {
  try {
    const { orderPincode } = req.body;

    if (!orderPincode) {
      return res.status(400).json({ message: "orderPincode is required" });
    }

    // Step 1: Nearby pincodes
    const nearbyPincodes = getNearbyPincodes(orderPincode);

    // Step 2: Find drivers
    const drivers = await Driver.find({
      zipCodes: { $in: nearbyPincodes }
    });

    // Step 3: Send SMS
    for (let driver of drivers) {
      await sendSMS(
        driver.phoneNumber,
        "New order available in your area"
      );
    }

    res.json({
      success: true,
      notifiedDrivers: drivers.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
