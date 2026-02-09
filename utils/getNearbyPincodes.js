const getNearbyPincodes = (orderPincode) => {
  // Dummy logic (real geo calculation nahi chahiye)
  return [
    orderPincode,
    orderPincode + 1,
    orderPincode + 2
  ];
};

module.exports = getNearbyPincodes;
