import { useState } from "react";
import axios from "axios";

export default function SubscribeBanner() {
  const [loading, setLoading] = useState("");

  const handleSubscribe = async (
    plan: "daily" | "weekly"
  ) => {
    try {
      setLoading(plan);

      const response = await axios.post(
        "/api/create-subscription",
        {
          plan,
        }
      );

      if (response.data.redirect_url) {
        window.location.href =
          response.data.redirect_url;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading("");
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Logo Circle */}
        <div className="mb-6">
          <img
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=600&auto=format&fit=crop"
            alt="Fitodyy"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white/20 object-cover shadow-2xl"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider text-green-400 drop-shadow-lg">
          FITOFYY
        </h1>

        {/* Quote */}
        <p className="mt-4 text-lg md:text-2xl text-white/90 font-medium">
          Transform Your Body. Calm Your Mind.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full max-w-lg flex-col gap-4 sm:flex-row">

          <button
            onClick={() => handleSubscribe("daily")}
            disabled={loading !== ""}
            className="flex-1 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:bg-green-600 hover:scale-105 disabled:opacity-70"
          >
            {loading === "daily"
              ? "Processing..."
              : "Subscribe Daily"}
          </button>

          <button
            onClick={() => handleSubscribe("weekly")}
            disabled={loading !== ""}
            className="flex-1 rounded-2xl bg-black/80 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:bg-black hover:scale-105 disabled:opacity-70"
          >
            {loading === "weekly"
              ? "Processing..."
              : "Subscribe Weekly"}
          </button>

        </div>

        {/* Bottom Text */}
        <div className="mt-10">
          <p className="mt-2 text-base md:text-xl text-white/80">
            First Day Free
          </p>
          <p className="mt-2 text-base md:text-lg text-white/80">
            Yoga • Meditation • Wellness
          </p>
        </div>

      </div>
    </section>
  );
}