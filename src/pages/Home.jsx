import React from "react";
import { useNavigate } from "react-router-dom";
import UpdateButtons from "../components/UpdateButtons";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6 text-center border-2 border-white m-auto">
      <h1 className="text-white mb-8 text-lg font-bold">
        Mark attendance for the event.
      </h1>
    <UpdateButtons />
    </div>
  );
}

