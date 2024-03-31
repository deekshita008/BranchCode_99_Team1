# MERN Stack Application with bcrypt Authentication

This is a simple MERN stack application that demonstrates user registration and login functionality with bcrypt for password hashing.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)

## Technologies Used

- MongoDB: NoSQL database for storing user information.
- Express.js: Web application framework for Node.js, used for server-side logic.
- React.js: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment for running server-side code.
- bcrypt: Library for hashing passwords securely.


## Features

- User Registration: Allows users to create a new account with a unique username and securely hashed password using bcrypt.
- User Login: Allows registered users to login with their username and password, with bcrypt used to verify the password.
- Protected Routes: Certain routes are protected and require authentication. Users must be logged in to access these routes.

## Usage

1. **Register a New User**:
- Navigate to the registration page and enter a unique username and password.
- The password is hashed securely using bcrypt before being stored in the database.

2. **Login**:
- After registering, users can log in with their username and password.
- The password entered during login is hashed and compared with the hashed password stored in the database using bcrypt for authentication.
- Used proxy in package.json to overpass the CORS policy.

3. **Access Protected Routes**:
- Certain routes, such as user profile or dashboard, may require authentication.
- Users must be logged in to access these routes, otherwise, they will be redirected to the login page.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or issues, feel free to open a pull request or raise an issue.

#ScreenShots
LOGIN PAGE

![TRANSPORT IITBBS - Google Chrome 3_31_2024 21_08_35](https://github.com/Nisarg-P27/IITBBS_GC__TeamID99_team1_pscode1/assets/133028554/22cbcbe4-db27-4a79-8415-ac4c6a0790a8)

REGISTRATION PAGE

![TRANSPORT IITBBS - Google Chrome 3_31_2024 21_08_47](https://github.com/Nisarg-P27/IITBBS_GC__TeamID99_team1_pscode1/assets/133028554/c1b13a83-1a06-42a6-b71e-2dd943873930)

