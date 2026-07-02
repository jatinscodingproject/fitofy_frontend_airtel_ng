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
      const params = new URLSearchParams(window.location.search);

      // Prefer msisdn from URL, otherwise use stored one
      const msisdn =
        params.get("msisdn") || localStorage.getItem("mobile");

      if (msisdn) {
        const response = await axios.post("/api/check-subscription", {
          msisdn,
        });

        if (
          response.data.success &&
          response.data.active &&
          response.data.token
        ) {
          // Always update token
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("mobile", msisdn);

          setToken(response.data.token);

          // Remove query string
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );

          setChecking(false);
          return;
        }

        // Subscription inactive/unsubscribed
        localStorage.removeItem("authToken");
        localStorage.removeItem("mobile");
        setToken(null);
      }

      // Redirect to subscription
      const subscribeResponse = await axios.post(
        "/api/create-subscription",
        {
          plan: "daily",
        }
      );

      if (subscribeResponse.data.redirect_url) {
        window.location.href = subscribeResponse.data.redirect_url;
        return;
      }

      setChecking(false);
    } catch (error) {
      console.error("Initialization failed:", error);

      localStorage.removeItem("authToken");
      localStorage.removeItem("mobile");
      setToken(null);

      setChecking(false);
    }
  };

  initializeApp();
}, []);

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="text-white text-xl">
          Checking Subscription...
        </div>
      </div>
    );
  }

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