# ✈️ Dream Travel 

Welcome to the **Dream Travel App** — your one-stop solution for managing and booking tours with an intuitive interface for both tourists and administrators. 

---

## 🌟 Features

### User Module
- Browse all available tours on the homepage.
- View detailed information about a specific tour, including:
  - Images, itineraries, hotels, and important details.
  - Booking functionality with a streamlined payment section.
- Leave reviews and ratings for completed tours.

### Admin Module
- Add, update, and delete tour details.
- Manage tour listings and itineraries.
- View user reviews and ratings.

---

## 🛠️ Tech Stack

### Backend
- **Node.js** with **Express.js** 
- **MongoDB** for the database
- **JWT Authentication**

### Frontend
- **React.js**
- **Material UI** for UI/UX

---

## 🚀 Live Demo

Experience the Travel App here: [Travel App Live](https://dream-travel-prajit96-prajit96s-projects.vercel.app/)

---

## 🛠️ Installation and Setup

### Backend
1. Clone the backend repository:
   ```bash
   git clone https://github.com/prajit96/travel-website/tree/main/server
   cd travel-website\server
2. Clone the frontend repository:
   ```bash
   git clone https://github.com/prajit96/travel-website/tree/main/client
   cd travel-website\client

## 🔑 Key API Endpoints

### 🏞️ Tours
- `GET /api/tours` - Fetch all tours.
- `POST /api/tours` - Create a new tour (Admin only).
- `DELETE /api/tours/:id` - Delete a tour (Admin only).

### 👤 Users
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate a user.

### 📝 Reviews
- `POST /api/reviews` - Add a review to a tour.
- `GET /api/reviews/:tourId` - Fetch reviews for a specific tour.

### 🛒 Bookings
- `POST /api/bookings` - Book a tour.

---

### Features
- **Homepage**: List of all tours.
- **Tour Details Page**: Detailed information about a specific tour, including booking functionality.
- **Admin Panel**: Manage tours and reviews.

---

## 🛠️ Key Components

### 🏞️ **TourCard**
- Displays individual tour details.

### 🏨 **TourDetails**
- Shows detailed tour information and booking options.

### 🛡️ **AdminDashboard**
- Allows admins to manage tours and reviews.

---

## 📄 Key Pages

### 🌍 **Homepage**
- Displays all available tours button for more details.

#### Each tour card includes:
- Tour name
- Place 
- Price and ratings

---

### 🏨 **Tour Details Page**
#### **Left Section:**
- Tour images and daily itinerary.
- Hotel details and highlights.

#### **Right Section:**
- Booking section with payment options.

---

## 🎉 Features

### **For Tourists**
- Browse tours by location and duration.
- View detailed itineraries, hotels, and highlights.
- Book tours with secure payment options.
- Leave reviews and ratings after completing a tour.

### **For Admins** (manage through backend)
- Manage tour listings with full CRUD functionality.
- Monitor bookings and user feedback.
- Moderate reviews and ratings.

---

## 🚀 Deployment

### **Backend**
- Deployed on Render at: (https://travel-website-backend-btfr.onrender.com/)

### **Frontend**
- Deployed on Vercel at: (https://dream-travel-prajit96-prajit96s-projects.vercel.app/):
  
  **Travel App Live**
  https://dream-travel-prajit96-prajit96s-projects.vercel.app/

---
## 📸 Screenshots

### Homepage
![Screenshot 2024-12-25 154157](https://github.com/user-attachments/assets/74f6dab0-93fb-42a4-b96a-86c64716375c)


### Tour Page
![Screenshot 2024-12-25 154532](https://github.com/user-attachments/assets/a559fa12-b231-4043-9764-bced566ca26d)


### Tour Details Page
![Screenshot 2024-12-25 154718](https://github.com/user-attachments/assets/cd29a8cc-4e86-489f-a672-945f8d98b9fc)



## 💡 Future Enhancements
- Add advanced filtering and search for tours.
- Integrate real-time notifications for bookings.
- Introduce seasonal discounts and dynamic pricing.

## 📧 Contact

Feel free to reach out for questions or contributions:

- **Email**: [santraprajit@gmail.com](mailto:santraprajit@gmail.com)  
- **GitHub**: [https://github.com/prajit96](https://github.com/prajit96)


