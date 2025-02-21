
# Eatzilla
Eatzilla is a full-stack food delivery web application that allows users to browse restaurants, order food, and track their deliveries seamlessly. 
The platform connects customers with restaurants and delivery personnel, ensuring a smooth food ordering experience.With Eatzilla, users can explore a diverse range of cuisines
from various restaurants, customize their orders, and receive real-time updates on their food delivery Status (Accept/Pending/Complete/Delivered) .
The application provides an intuitive and interactive user interface, making the food ordering process effortless and enjoyable.
Additionally, restaurants can efficiently manage their menus, track customer orders, and optimize their services.


## Features
1. **User Authentication**: Secure login and registration with JWT authentication.
2. **Restaurant Management**: Restaurants can list their menu items and manage orders.
3. **Food Ordering**: Users can add food items to their cart and place orders.
4. **Order Tracking**: Live order status updates from restaurant preparation to delivery.
5. **Payment Integration**: Secure payment gateway for online transactions.
6. **User-Friendly UI**: Responsive design with Material UI and Tailwind CSS.

## Tech Stack
### Frontend:
- React.js
- Material UI
- Tailwind CSS
- Formik & Yup (for form validation)

### Backend:
- Spring Boot
- JWT Authentication
- MySQL Database

### Deployment:
- Docker
- AWS / Heroku (for hosting)

## Installation
### Prerequisites:
- Node.js & npm
- Java & Spring Boot
- MySQL Database

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/eatzilla.git
   cd eatzilla
   ```
2. Setup Backend:
   ```sh
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```
3. Setup Frontend:
   ```sh
   cd frontend
   npm install
   npm start
   ```
4. Open the application in your browser at `http://localhost:3000`

## API Endpoints
1. `POST /auth/login` - User authentication
2. `POST /auth/register` - User registration
3. `GET /restaurants` - Fetch all restaurants
4. `GET /menu/{restaurantId}` - Fetch menu items for a restaurant
5. `POST /order` - Place an order
6. `GET /order/{orderId}` - Track order status

## Contribution
1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feature-name`
5. Open a pull request.

