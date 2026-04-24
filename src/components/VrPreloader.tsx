import React from "react";

const VRPreloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-indigo-950 to-black flex flex-col items-center justify-center z-[9999] overflow-hidden">

      {/* Floating Glow Orbs */}
      <div className="absolute w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulseSlow top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulseSlow bottom-10 right-10"></div>

      {/* VR Kid Avatar */}
      <div className="relative flex flex-col items-center">

        {/* Head */}
        <div className="relative w-36 h-36 bg-yellow-300 rounded-full animate-float">

          {/* VR Headset */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-12 bg-gray-900 rounded-xl shadow-2xl animate-glow">

            <div className="absolute inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-70 animate-shimmer"></div>
          </div>

          {/* Hands */}
          <div className="absolute -left-12 top-20 w-10 h-10 bg-yellow-300 rounded-full animate-waveLeft"></div>
          <div className="absolute -right-12 top-20 w-10 h-10 bg-yellow-300 rounded-full animate-waveRight"></div>
        </div>

        {/* VR Controllers Floating */}
        <div className="absolute -bottom-16 left-10 w-6 h-6 bg-indigo-500 rounded-full animate-floatSlow"></div>
        <div className="absolute -bottom-20 right-10 w-6 h-6 bg-purple-500 rounded-full animate-floatSlow delay-200"></div>

      </div>



      {/* Loading Bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 animate-loadingBar"></div>
      </div>
    </div>
  );
};

export default VRPreloader;
