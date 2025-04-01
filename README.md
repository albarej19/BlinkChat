# Chat App

## Overview
This project is a real-time chat application built with modern web technologies. It allows users to sign up, log in, and chat with other users in real-time. The application includes features such as user authentication, profile management, and real-time messaging.

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **State Management:** Zustand
- **Icons:** Lucide-react

## Features
- **User Authentication:** Secure sign-up and login functionality using JWT tokens.
- **Profile Management:** Users can update their profile information and upload profile pictures.
- **Real-Time Messaging:** Users can send and receive messages in real-time using WebSockets.
- **Responsive Design:** The application is fully responsive and works on all devices.
- **Notifications:** Real-time notifications for new messages.

## File Structure
- **frontend/src/pages:** Contains the main pages of the application such as `LoginPage.jsx` and `ProfilePage.jsx`.
- **frontend/src/store:** Contains the state management logic using Zustand.
- **frontend/src/components:** Contains reusable UI components.
- **backend/src:** Contains the server-side code including routes, controllers, and models.

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   ```
2. **Install frontend dependencies:**
   ```bash
   cd chat-app/frontend
   npm install
   ```
3. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application
1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```
2. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm start
   ```

### Environment Variables
Create a `.env` file in the `backend` directory and add the following environment variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
