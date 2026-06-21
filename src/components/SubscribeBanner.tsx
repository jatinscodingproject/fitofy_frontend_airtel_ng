import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Videos from "./components/Videos";
import Footer from "./components/Footer";

export default function App() {
  const [checking, setChecking] = useState(true);
  const [token, setToken] = useState(
    localStorage.getItem("authToken")
  );

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // User already authenticated
        if (token) {
          return;
        }

        // No token, create subscription and redirect
        const response = await axios.post(
          "/api/create-subscription",
          {
            plan: "daily", // change if needed
          }
        );

        if (response.data.redirect_url) {
          window.location.href =
            response.data.redirect_url;
          return;
        }
      } catch (error) {
        console.error(
          "Subscription redirect failed:",
          error
        );
      } finally {
        setChecking(false);
      }
    };

    initializeApp();
  }, [token]);

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="text-white text-xl">
          Loading...
        </div>
      </div>
    );
  }

  // If no token and redirect didn't happen
  if (!token) {
    return null;
  }

  return (
    <>
      <Navbar />
      <HeroSlider />
      <Videos />
      <Footer />
    </>
  );
}