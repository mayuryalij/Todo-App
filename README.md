# Todo App

This is a simple Todo App developed using React and Express.

## Features

- Add, edit, and delete tasks
- Fetch tasks from a backend API
- Display tasks in a table format

## Live Demo

You can try out the live demo of the Todo App [here](https://todo-app-h843.onrender.com/).

## Technologies Used

- React
- Express
- MongoDB
- Axios
- Bootstrap

## Installation

To run the Todo App locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd todo-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the frontend:

   ```shell
   npm start
   ```

   The app will be available at `http://localhost:3000`.

5. Start the backend:

   ```shell
   node server.js
   ```

   The backend server will be available at `http://localhost:5000`.

## API Endpoints

- `GET /contactlist`: Get all tasks
- `POST /contactlist/add`: Add a new task
- `PUT /contactlist/update/:id`: Update a task by ID
- `DELETE /contactlist/delete/:id`: Delete a task by ID

## Environment Variables

The following environment variables are used in the application:

- `PORT`: The port on which the server will run (default: 5000)
- `connectionString`: MongoDB connection string

Make sure to set these environment variables before starting the server.

