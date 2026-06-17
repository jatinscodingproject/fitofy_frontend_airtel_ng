import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SubscribeBanner from "./components/SubscribeBanner";
import HeroSlider from "./components/HeroSlider";
import Videos from "./components/Videos";
import Footer from "./components/Footer";

export default function App() {
  const [checking, setChecking] = useState(true);
  const [token, setToken] = useState(
    localStorage.getItem("authToken")
  );

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const msisdn = params.get("msisdn");

        if (!msisdn) {
          setChecking(false);
          return;
        }

        const response = await axios.post(
          "/api/check-subscription",
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

          // Remove msisdn from URL
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setChecking(false);
      }
    };

    autoLogin();
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
    return (
      <>
       
        <SubscribeBanner />
      </>
    );
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