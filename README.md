# DwellMate Server 🛠️

The **DwellMate Server** is the backend service powering the roommate-matching platform, **DwellMate**. It handles user data, listing management, authentication (via Firebase), and API endpoints using a secure and scalable Node.js environment.

Built with **Express.js** and **MongoDB**, the server supports efficient data transactions and real-time interactions with the frontend React client.

---

## 🔗 Connected Frontend Repository

👉 **DwellMate Client**: [View Frontend Repository](https://github.com/ameerhamzahd/dwellmate-client)

The backend works in harmony with the frontend client built using React, Tailwind CSS, and Firebase. Please ensure both client and server are configured and running correctly for a seamless experience.

---

## 📦 Features

- 🌐 **RESTful API Endpoints** – Manage users, listings, and interactions
- 🧑‍💼 **User & Roommate Listings** – Fetch and post user-generated listings
- 🔐 **Secure Environment** – Configurable using `.env` and integrates with Firebase for user management
- ⚙️ **CORS and Middleware Support** – Supports modern HTTP methods and cross-origin requests
- 🚀 **Vercel-Ready** – Easily deployable on Vercel using `vercel.json`

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: Firebase
- **Deployment**: Vercel

---

## 🛠️ Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/dwellmate-server.git
   cd dwellmate-server

2. **Install dependencies:**:
    ```bash
    npm install

3. **Set up environment variables**:
    Create a .env file and add your variables:
    ```env
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password

4. **Run locally**:
    ```bash
    nodemon index.js

---

## 🚀 Deployment

1. **Install Vercel CLI (if not already)**:
    ```bash
    npm install -g vercel

2. **Login to your Vercel account**:
    ```bash
    vercel login

3. **Deploy your server**:
    ```bash
    vercel --prod

---

## 📬 Contact

For issues or suggestions, please contact: ameerhamzah.daiyan@gmail.com

---

## 📄 License

-This project is licensed under the MIT License.

---

## ✨ Acknowledgements

Thanks to Firebase, Tailwind, and the React ecosystem for powering this project.

---