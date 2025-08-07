import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1); // go back to previous page in history
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <button
        onClick={handleBack}
        className="px-2 py-2 bg-gray-700 hover:bg-gray-600 rounded transition text-sm sm:text-base"
      >
        ← Back
      </button>

      <h1 className="font-bold sm:text-xl text-base">
        Code Vault - Scan & Serve
      </h1>

      <div className="w-16">{/* Placeholder for spacing/alignment */}</div>
    </nav>
  );
};

export default Navbar;
