import React, { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(); // Directly call getDatabase() without passing app

// Method to fetch pH data
const fetchPHData = async () => {
  const snapshot = await get(ref(db, "pHdata")); // Use 'ref' to specify the database reference
  return snapshot.val();
};

// Method to fetch temperature data
const fetchTemperatureData = async () => {
  const snapshot = await get(ref(db, "temperature"));
  return snapshot.val();
};

// Method to fetch oxygen levels data
const fetchOxygenLevelsData = async () => {
  const snapshot = await get(ref(db, "oxygen_levels"));
  return snapshot.val();
};

// Method to fetch hardness data
const fetchHardnessData = async () => {
  const snapshot = await get(ref(db, "hardness"));
  return snapshot.val();
};

export const FirebaseContext = createContext(); // Export FirebaseContext here

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(`Error signing up: ${error.message}`);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(`Error logging out: ${error.message}`);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        fetchPHData,
        fetchTemperatureData,
        fetchOxygenLevelsData,
        fetchHardnessData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
