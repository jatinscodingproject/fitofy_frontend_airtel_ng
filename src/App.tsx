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
        // Already logged in
        if (token) {
          setChecking(false);
          return;
        }

        const params = new URLSearchParams(
          window.location.search
        );

        const msisdn = params.get("msisdn");

        // If msisdn available check subscription
        if (msisdn) {
          const response = await axios.post(
            "https://airtelng.fitofyy.com/api/check-subscription",
            {
              msisdn,
            }
          );

          if (
            response.data.success &&
            response.data.active &&
            response.data.token
          ) {
            localStorage.setItem(
              "authToken",
              response.data.token
            );

            localStorage.setItem(
              "mobile",
              msisdn
            );

            setToken(response.data.token);

            window.history.replaceState(
              {},
              document.title,
              window.location.pathname
            );

            return;
          }
        }

        // No msisdn OR inactive subscription
        const subscribeResponse = await axios.post(
          "https://airtelng.fitofyy.com/api/create-subscription",
          {
            plan: "daily",
          }
        );

        if (subscribeResponse.data.redirect_url) {
          window.location.href =
            subscribeResponse.data.redirect_url;
          return;
        }
      } catch (error) {
        console.error(error);
      } finally {
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