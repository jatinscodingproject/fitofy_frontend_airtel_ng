import { useState, useRef, useEffect } from "react";
import Hls from "hls.js";
import axios from "axios";

export default function LifestyleVideos() {
  const [videos, setVideos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ✅ Load videos from API
  useEffect(() => {
    axios
      .get("https://airtelng.kidszonepro.com/api/hls/yoga-videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Load HLS video
  useEffect(() => {
    if (selected && videoRef.current) {
      const src = `https://airtelng.kidszonepro.com/content/Yoga/${selected.slug}/${selected.slug}.m3u8`;

      let hls: Hls | null = null;

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      } else {
        videoRef.current.src = src;
      }

      return () => {
        if (hls) hls.destroy();
      };
    }
  }, [selected]);

  // ✅ Thumbnail path
  const getThumbnail = (name: string) => {
    return `https://airtelng.kidszonepro.com/content/Yoga/thumbnails/${encodeURIComponent(
      name
    )}.png`;
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl mb-8 text-center font-bold">
        Yoga Videos
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.name}
            onClick={() => setSelected(video)}
            className="cursor-pointer group"
          >
            <img
              src={getThumbnail(video.name)}
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/300x200?text=No+Image";
              }}
              className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />

            <p className="mt-2 text-center text-sm">
              {video.name}
            </p>
          </div>
        ))}
      </div>

      {/* PLAYER */}
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