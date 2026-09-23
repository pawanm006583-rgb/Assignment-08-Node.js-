
# User Management API 

A RESTful API built using **Node.js, Express.js, MongoDB, and Mongoose** to create and retrieve user records. This project demonstrates basic CRUD concepts, database connectivity, and modular backend application structure.

##  Project Overview

The User Management API allows users to be stored in a MongoDB database and retrieved through HTTP requests.

The application uses Express.js for routing and Mongoose for MongoDB operations. Thunder Client is used to test the API endpoints.

##  Features

- Create a new user
- Retrieve all users
- MongoDB Atlas database integration
- Mongoose schema and model
- Modular folder structure
- JSON request and response handling
- API testing using Thunder Client

##  Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| Thunder Client | API testing |

##  Project Structure

```text
Project/
├── Router/
│   └── userRouter.js
├── Model/
│   └── userModel.js
├── Schema/
│   └── userSchema.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

##  Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Project
```

### 2. Install Dependencies

```bash
npm install
```

If dependencies are not already listed in `package.json`, install them:

```bash
npm install express mongoose dotenv
```

### 3. Configure MongoDB

Update the MongoDB connection string in `server.js` with your MongoDB Atlas connection URI.

```javascript
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING")
```

Replace the placeholder with your actual connection string.

> **Security:** Never commit your real MongoDB credentials to a public GitHub repository. Use environment variables and keep `.env` out of version control for better security.

### 4. Start the Server

```bash
nodemon server.js
```

Or run using Node.js:

```bash
node server.js
```

The server runs on:

```text
http://localhost:3000
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Retrieve all users |

##  API Usage

### 1. Create a User

**POST** `/api/users`

Request Body:

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "age": 22,
  "course": "MCA"
}
```

Expected response: `201 Created` with the newly created user document.

### 2. Retrieve All Users

**GET** `/api/users`

Returns a JSON array containing all user records stored in MongoDB.

##  Testing

The API endpoints can be tested using Thunder Client in Visual Studio Code or any API testing tool.

1. Start the backend server.
2. Send a POST request to create a user.
3. Send a GET request to retrieve all users.
4. Verify the stored records in MongoDB Atlas.

##  Learning Outcomes

- Understanding REST API development with Express.js
- Connecting Node.js applications to MongoDB Atlas
- Creating Mongoose schemas and models
- Implementing POST and GET routes
- Organizing backend code into separate modules
- Testing APIs using Thunder Client

##  Author

**Pawan Mishra**

B.Tech – Computer Science Engineering

---

⭐ If you find this project useful, feel free to explore and learn from it.
