# Broadcast Order Notification API

This project is a Node.js + Express REST API that broadcasts order notifications to nearby delivery drivers based on pincodes, similar to how Ola/Uber notifies nearby drivers.

---

## 📌 Objective

When an order is placed with a specific pincode:
1. Find nearby pincodes within a 5 KM radius (mocked).
2. Identify drivers working in those pincodes.
3. Send SMS notifications to the matched drivers.

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **HTTP Client:** Axios (mocked SMS API)


---

## 📄 Driver Model

Each driver has the following schema:

```js
{
  name: String,
  phoneNumber: String,
  zipCodes: [Number]
}


---

## 🚀 API Endpoint
-**Broadcast Order**
POST /api/broadcastOrder

**Request Body**

 {
  "orderPincode": 560068
 }


Response
{
  "success": true,
  "notifiedDrivers": 2
}













