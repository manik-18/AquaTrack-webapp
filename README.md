# 🐠 Aqua Track

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

Aqua Track is a web application designed to monitor and display real-time aquarium parameters such as pH, hardness, temperature, and dissolved oxygen. With Aqua Track, users can effortlessly track the health of their aquariums from anywhere with internet access.

## 🚀 Features

- Real-time monitoring of aquarium parameters.
- 📊 User-friendly interface with intuitive chart visualizations.
- 📡 Integration with Firebase for seamless data retrieval and storage.
- 📱 Scalable and responsive design built using Vite, React, and Tailwind CSS.

## 🖼️ Screenshots

![Login](https://github.com/manik-18/AquaTrack-webapp/assets/102967918/c825a927-2d93-422c-8086-892cacbde3b8)

![HomePage1](https://github.com/manik-18/AquaTrack-webapp/assets/102967918/433c57f0-c01e-4699-a760-8456055dd0d6)

![HomePage2](https://github.com/manik-18/AquaTrack-webapp/assets/102967918/83de1d8e-da25-434d-be7d-1e654ec1a7ef)

![AnalysisSection](https://github.com/manik-18/AquaTrack-webapp/assets/102967918/c4c8671f-7854-4d91-828d-79cfe5c2ed35)


## 🛠️ Setup

1. Clone the repository:

```bash
git clone https://github.com/manik-18/AquaTrack-webapp.git
```

2. Navigate to the project directory:

```bash
cd AquaTrack-webapp-main
```

3. Create a `.env` file in the root directory and add the following environment variables:

```dotenv
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
```

Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, `YOUR_PROJECT_ID`, `YOUR_STORAGE_BUCKET`, `YOUR_SENDER_ID`, `YOUR_APP_ID`, and `YOUR_MEASUREMENT_ID` with your actual Firebase configuration values.

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the app.

## 🛠️ Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

## 🔥 Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
2. Obtain your Firebase configuration object.
3. Replace the Firebase configuration object in `src/context/context.jsx` with your own configuration.

## 🤝 Contribution

Contributions are welcome! Please fork the repository and create a pull request with your suggested changes.

## 📝 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
