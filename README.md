# Next.js Fullstack Boilerplate

A fullstack boilerplate project using Next.js, Prisma, PostgreSQL, and Tailwind CSS. This project provides a starting point for building fullstack applications with a modern tech stack. It includes essential features such as authentication, database integration, theming, and role-based access control (RBAC) along with Login and Signup pages with full functionality.

## Table of Contents

- [Demo](#demo)
- [Features](#features-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Setup](#setup)
    - [Running the Development Server](#running-the-development-server)
    - [Building for Production](#building-for-production)
    - [Starting for Production](#starting-for-production)
- [Pages and APIs](#pages-and-apis)
- [Authentication and RBAC](#authentication-and-rbac)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Demo](https://github.com/user-attachments/assets/a663b369-a354-401d-92e7-5b9d745e351c)

## Features Overview

- **Authentication**:
  - Login and Signup pages
  - Authentication using JWT
  - HTTP-only cookies for storing JWT
- **Styling**:
  - Tailwind CSS for styling
  - Light & Dark mode theme
  - Responsive design
- **Access Control**:
  - Role-Based Access Control (RBAC)
  - Protected routes
  - User and Admin roles
- **Backend APIs**:
  - Next.js API routes
- **Database**:
  - PostgreSQL database
  - Prisma for database access

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes, Prisma
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT) using the `jose` library

## Project Structure

The project structure is as follows:

<div style="display: flex; justify-content: space-around;">
  <div>
    <h3>Frontend</h3>
    <img src="https://github.com/user-attachments/assets/24c4a8d1-46a8-43eb-9429-22cd9fd68f4f" alt="Pages" width="400"/>
  </div>

  <div>
    <h3>Backend</h3>
    <img src="https://github.com/user-attachments/assets/ad769cd3-2d7b-42e6-a628-15e99f10ddcf" alt="API Routes" width="400"/>
  </div>
</div>

## Getting Started

### Prerequisites

Before you begin, you'll need [Git](https://git-scm.com), [pnpm](https://pnpm.io/), [Node.js](https://nodejs.org/en/download/), [Postgres](https://www.postgresql.org/) installed on your computer with the following versions (lower versions may or may not work):

- Git (v2.39.x or later)
- pnpm (v9.11.x or later)
- Node.js (v20.x.x or later)
- PostgreSQL (v14.x.x or later)

### Environment Variables

Copy the `.env.example` file to `.env` and update the environment variables as needed.

### Setup

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/nextjs-fullstack-boilerplate.git
   cd nextjs-fullstack-boilerplate
   ```

2. **Install dependencies**:

   ```sh
   pnpm install
   ```

3. **Set up the database**:

   Create a PostgreSQL database and update the `DATABASE_URL` in the `.env` file.

4. **Run database migrations**:

   ```sh
   pnpm prisma migrate dev
   ```

### Running the Development Server

Start the development server:

```sh
pnpm dev
```

Open your browser and navigate to http://localhost:3000.

### Building for Production

Build the application for production:

```sh
pnpm build
```

Start the production server:

```sh
pnpm start
```

## Deep Dive into Project

### Pages and APIs

#### Pages

- **Login Page (`/login`)**: The login page for users to log in.
- **Signup Page (`/signup`)**: The signup page for new users to create an account.
- **Home Page (`/`)**: The landing page of the application.
- **Admin Dashboard (`/admin/dashboard`)**: A protected page accessible only to users with admin roles.

#### API Routes

- **Login API (`/api/auth/login`)**: The API route for user login.
- **Signup API (`/api/auth/signup`)**: The API route for user signup.
- **Logout API (`/api/auth/logout`)**: The API route for user logout.
- **Check Auth API (`/api/auth/check`)**: The API route to check if the user is authenticated.
- **Catch-All API (`/api/*`)**: A catch-all API route to handle all other requests.

### Authentication and RBAC

#### Authentication

The application uses JSON Web Tokens (JWT) for authentication, implemented using the `jose` library. The JWT is stored in an HTTP-only cookie to enhance security.

- **Login**: Users can log in by providing their credentials. Upon successful login, a JWT is generated and stored in an HTTP-only cookie.
- **Signup**: New users can create an account by providing their details. Upon successful signup, a JWT is generated and stored in an HTTP-only cookie.
- **Logout**: Users can log out, which clears the JWT cookie.

#### Role-Based Access Control (RBAC)

The application implements role-based access control to restrict access to certain pages based on user roles.

- **Roles**: The application supports multiple roles, such as `user` and `admin`.
- **Access Control**: Middleware functions check the user's role before allowing access to protected routes.

## Contributing

I welcome contributions to make this project better for everyone. Here are some ways you can contribute:

- **Report Bugs**: If you encounter any bugs, please create an issue with detailed information about the problem and how to reproduce it.
- **Suggest Features**: Have an idea for a new feature? Open an issue to discuss it with the community.
- **Improve Documentation**: Help improve the documentation by making it clearer and more comprehensive.
- **Submit Pull Requests**: If you have made improvements or added new features to your fork, feel free to submit a pull request. Please ensure your code follows the project's coding standards and includes relevant tests.

### How to Contribute

1. **Fork the Repository**: Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.
2. **Clone the Fork**: Clone your fork to your local machine using the following command:
   ```sh
   git clone https://github.com/yourusername/nextjs-fullstack-boilerplate.git
   ```
3. **Create a Branch**: Create a new branch for your feature or bugfix:
   ```sh
   git checkout -b feature-or-bugfix-name
   ```
4. **Make Changes**: Make your changes in the new branch.
5. **Commit Changes**: Commit your changes with a descriptive commit message:
   ```sh
   git commit -m "Description of the changes"
   ```
6. **Push to Fork**: Push your changes to your forked repository:
   ```sh
   git push origin feature-or-bugfix-name
   ```
7. **Open a Pull Request**: Go to the original repository and open a pull request from your forked repository. Provide a clear description of the changes and any related issues.

Thank you for your contributions!
