# **Eatzilla Food Delivery System**

Welcome to **Eatzilla**, a food delivery system built to streamline the process of ordering food online.
This project encompasses a full-stack application designed to manage users, restaurants, menus, and food orders efficiently.

## **Project Overview:**

Eatzilla provides a seamless experience for customers to explore restaurants, browse menus, and place food orders.
It features user authentication, real-time order status(Accept,Pending,Complete,Deliverd)and an intuitive user interface.

**Technologies Used:**
- **Frontend**:
  - React.js for building the user interface.
  - Tailwind CSS for responsive and modern design.
  - Material UI for UI components.
  - Formik & Yup for form handling and validation.

- **Backend**:
  - Spring Boot for backend services and APIs.
  - JWT (JSON Web Token) for authentication.
  - MySQL for managing the database.
 
**Key Features:**

- **User Registration and Authentication**:
  - User sign-up, login, and secure authentication using JWT.

- **Restaurant and Menu Management**:
  - Restaurants can manage their menus, including adding, updating, or removing items.
  - Customers can view restaurant details and their available dishes.

- **Order Management**:
  - Users can add items to their cart and place orders.
  - Restaurants can track and manage incoming orders.
  - Real-time updates on order status for customers.

- **Responsive UI**:
  - User-friendly and accessible design optimized for all device sizes using Tailwind CSS.
  - Interactive components with Material UI for a modern feel.



1. **Backend Setup**:
- Navigate to the `backend-spring-boot` folder.
- Set up MySQL and configure database properties in `application.properties`.
- Run the Spring Boot application using:
   **mvn spring-boot:run**

2. **Frontend Setup**:
- Navigate to the `frontend-react` folder.
- Install dependencies using:

     **npm install**
  ```
- Start the React development server:
  
     **npm start**
