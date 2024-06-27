
# Inddev Assignment

This project implements a CRUD API using Node.js and MongoDB for managing user data.

## Installation

1. **Clone the repository:**

  
   git clone https://github.com/Anshumann72/inddev_assignment
   cd inddev_assignment
  

2. **Install dependencies:**

  
   npm install


3. Set up Port & DataBase:


   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/userdb
   



## Usage

1. **Start the server:**

   
   npm start
   

   The server will start at `http://localhost:5000`.

2. **API Endpoints:**

   - **GET /api/users:** Retrieve a list of users.
     - Supports pagination (`page`), limit (`limit`), search (`search`), and sorting (`sort`).

   - **POST /api/users:** Create a new user.
     - Requires a JSON payload with user details.

   - **GET /api/users/:id:** Retrieve details of a specific user.
     - Replace `:id` with the user's ID.

   - **PUT /api/users/:id:** Update details of a specific user.
     - Replace `:id` with the user's ID. Requires a JSON payload with updated user details.

   - **DELETE /api/users/:id:** Delete a specific user.
     - Replace `:id` with the user's ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (for MongoDB object modeling)
- Other dependencies as per `package.json`



