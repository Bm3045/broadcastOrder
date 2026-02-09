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

🔄 API Flow
Order Pincode
   ↓
Find Nearby Pincodes (Mocked)
   ↓
MongoDB Query using $in operator
   ↓
Matched Drivers
   ↓
Send SMS Notifications (Mocked)

🧠 Logic Highlights

Nearby pincodes are generated using a dummy function.

MongoDB $in operator is used to match drivers whose zipCodes intersect with nearby pincodes.

SMS notifications are sent via a mock SMS service.



▶️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone <your-github-repo-url>
cd broadcast-order-api

2️⃣ Install Dependencies
npm install

3️⃣ Start MongoDB

Ensure MongoDB is running locally:

mongodb://127.0.0.1:27017

4️⃣ Start the Server
node server.js


Expected output:

MongoDB Connected
Server running on port 5000

🧪 Testing the API

Use Postman or cURL.

POST http://localhost:5000/api/broadcastOrder

Headers:

Content-Type: application/json


Body:

{
  "orderPincode": 560068
}

🧪 Sample Database Data

Insert sample drivers into MongoDB:

{
  "name": "Driver A",
  "phoneNumber": "+919999999999",
  "zipCodes": [560068, 560070]
}

{
  "name": "Driver B",
  "phoneNumber": "+918888888888",
  "zipCodes": [560067]
}

