import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">
          <span className="text-white">Fito</span>
          <span className="text-orange-500">fyy</span>
        </h1>
      </div>
      <div className="border-t border-gray-800"></div>

      <div className="py-8 text-center text-sm text-gray-500">
        © {currentYear}{" "}
        <span className="text-orange-500 font-medium">
          Fitofyy
        </span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
