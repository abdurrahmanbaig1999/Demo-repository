
# MERN STACK Project

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## About

This project is a social networking application where users can create profiles, connect with others, share updates, and engage with posts, similar to LinkedIn. The app is built using the MERN stack, leveraging the following technologies.

## Technologies Used

This project uses the following technologies:

- **MongoDB**: Database for storing application data.
- **Express.js**: Web framework for Node.js, handling server-side logic.
- **Node.js**: JavaScript runtime for server-side code execution.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **React.js**: Frontend framework for building user interfaces.
- **Axios**: Promise-based HTTP client for API requests from the frontend.
- **Material-UI**: For UI components in the React frontend.
- **jsonwebtoken**: For implementing user authentication using JSON Web Tokens (JWT).
- **multer**: For handling file uploads, such as user profile images.

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/AhmadBajwa2/project.git
   cd project-name
   ```

2. For the server, install dependencies:
   ```bash
   cd server
   npm install
   ```

3. For the client (React app), install dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Start the development server and client using the following commands (in separate terminals):
   ```bash
   # Start server
   node index.js
   
   # Start client
   npm start
   ```

