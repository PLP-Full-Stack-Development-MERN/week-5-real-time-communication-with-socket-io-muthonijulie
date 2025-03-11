import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Room from "./components/Room";
import backgroundImage from "./assets/360_F_545428173_uyYWJoR9n5uJFYIWfDa2C49AzIECcU20.jpg";

function App() {
  const [room, setRoom] = useState("");

  return (
    <div
      className="w-396 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg text-center w-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Real-Time Notes</h1>
        {room ? <Room room={room} /> : <Home setRoom={setRoom} />}
        {room && (
          <button
            onClick={() => setRoom("")}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          >
            Leave Room
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
