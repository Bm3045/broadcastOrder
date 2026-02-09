const axios = require("axios");

const sendSMS = async (phoneNumber, message) => {
  console.log(`SMS sent to ${phoneNumber}: ${message}`);

  // Dummy API call

//   await axios.post("https://dummy-sms-api.com/send", {
//     to: phoneNumber,
//     message
//   });
  
};

module.exports = sendSMS;
