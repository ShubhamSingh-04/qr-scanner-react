import React from "react";
import { useNavigate } from "react-router-dom";
import ActivityButtons from "../components/ActivityButtons";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Code Vault</h1>
      <p className="text-gray-700 mb-8">
        Mark attendance for the event.
      </p>


    <ActivityButtons />
      
    </div>
  );
}

