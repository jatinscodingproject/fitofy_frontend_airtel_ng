import React, { useState, useRef, useEffect } from "react";
import Hls from "hls.js";

const videos = [
  "10-Min-Yoga",
  "FULL-STRETCH",
  "Lifestyle-Yoga-Practice",
  "Lifestyle-Yoga-With-Baby",
  "Meditation-Yoga",
  "Vinyasa-Yoga",
  "Yoga-Beginners",
  "Yoga-Class",
  "Yoga-For-High-BP",
  "Yoga-For-Weight-Gain",
  "Yoga-Full-Body",
  "Yoga-Mat",
  "Yoga-On-The-Beach",
  "Yoga-Relaxation"
];

export default function YogaVideos() {
  const [selected, setSelected] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ✅ SIMPLE thumbnail mapping (no hacks needed anymore)
  const getThumbnail = (name: string) => {
    return `https://telza.fitofyy.com/Yoga/thumbnails/${name}.png`;
  };

  useEffect(() => {
    if (selected && videoRef.current) {
      const src = `https://telza.fitofyy.com/Yoga/${selected}/${selected}.m3u8`;

      let hls: Hls | null = null;

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      } else {
        videoRef.current.src = src;
      }

      // ✅ cleanup (important)
      return () => {
        if (hls) {
          hls.destroy();
        }
      };
    }
  }, [selected]);

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl mb-8 text-center font-bold">
        Yoga Library
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((name) => (
          <div
            key={name}
            onClick={() => setSelected(name)}
            className="cursor-pointer group"
          >
            <img
              src={getThumbnail(name)}
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/300x200?text=No+Image";
              }}
              className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />

            <p className="mt-2 text-center text-sm">
              {name.replaceAll("-", " ")}
            </p>
          </div>
        ))}
      </div>

      {/* PLAYER MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="w-[90%] max-w-5xl">
            <button
              onClick={() => setSelected(null)}
              className="mb-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              Close
            </button>

            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}