# Feast Flow

## Project Overview

This is a full-stack food ordering web application developed using **React.js**, **MongoDB**, **Express.js**, **Node.js**, and **Stripe**. The app provides users with a seamless experience of browsing, adding food items to the cart, making secure payments(mock integration), and tracking their orders. It also features an admin panel for managing food items, and orders. This project highlights web development practices, including state management, routing, secure payment processing, and efficient data communication.

## [Demo](https://drive.google.com/file/d/1BHFcOuMDQ6crp4kLw-dUKVy1vRadaGC-/view?usp=drive_link)

## Features

### User Features
- **Authentication**: Users can sign up, log in, and manage their accounts.
- **Browse Food Items**: Users can view categorized food items on the responsive homepage.
- **Shopping Cart**: Add items to the cart, adjust quantities, and view the total price in real time.
- **Order Placement**: Secure checkout using **Stripe** for payment processing.
- **Order Tracking**: Users can track the status of their orders in real time.

### Admin Features
- **Order Management**: Admins can view and update order statuses.
- **Product Management**: Admins can add, edit, or remove food items.
- **Real-Time Cart Updates**: Admins see real-time updates as users interact with the cart.

## Tech Stack

### Frontend
- **React.js**: Dynamic user interface built with React.
- **React Context API**: Centralized state management for handling cart operations and user authentication.
- **React Router**: Enables navigation between different pages such as the homepage, cart, and admin panel.
- **CSS3**: Responsive design with custom styling to ensure a smooth user experience across devices.

### Backend
- **Node.js**: JavaScript runtime for server-side operations.
- **Express.js**: Web framework for building the API and managing routes.
- **MongoDB**: NoSQL database to store user data, orders, and product details.
- **Stripe**: Payment gateway integration for secure online transactions.

### Authentication & Security
- **JSON Web Tokens (JWT)**: Used for user authentication and authorization.
- **Bcrypt**: For encrypting user passwords.

## How It Works

1. **User Interaction**: 
   - Users visit the app, browse food items, and add them to their shopping cart. They can log in or sign up to proceed with the checkout process.
   
2. **Cart and Checkout**: 
   - The app dynamically updates the cart using React's state management. Upon checkout, Stripe handles payment processing securely.
   
3. **Order Management**: 
   - After placing an order, users can track the order status via a dashboard. The admin has access to manage all orders and update their statuses in real time.
   
4. **Admin Panel**: 
   - Admins can manage the product catalog, including adding new products and updating inventory. They can also manage orders, ensuring smooth order fulfillment.

## Setup and Installation

### Prerequisites

- Node.js (version 14.x or higher recommended)
- npm or yarn

### Installation

1. **Clone the Repository**

  ```bash
   git clone https://github.com/yourusername/food-delivery-app.git
   cd food-delivery-app
   ```
   
2. **Install Backend Dependencies**

  ```bash
   cd backend
   npm install
  ```
3. **Install Frontend Client Dependencies**

  ```bash
   cd client
   npm install
  ```

4. **Install Frontend Admin Dependencies**

  ```bash
   cd admin
   npm install
  ```
5. **Set up Environment Variables Create a ```.env``` file in the backend directory and add:**

  ```bash
   MONGODB_URI=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   JWT_SECRET=your_jwt_secret
  ```

6. **Run the Application**

##### Start Backend:

  ```bash
   cd backend
   npm run server
  ```
  
##### Start Frontend:
  
  ```bash
   cd frontend_dir(client and admin)
   npm run server
  ```
