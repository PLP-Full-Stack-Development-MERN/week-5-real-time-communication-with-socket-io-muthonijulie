import React, { useState } from "react";

function Home({ setRoom }) {
  const [roomInput, setRoomInput] = useState("");

  const joinRoom = () => {
    if (roomInput.trim()) {
      setRoom(roomInput);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Real-Time Notes</h1>
      <input
        type="text"
        placeholder="Enter room name..."
        value={roomInput}
        onChange={(e) => setRoomInput(e.target.value)}
        className="border p-2 rounded mb-2 bg-white text-gray-900"
      />
      <button
        onClick={joinRoom}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Join Room
      </button>
    </div>
  );
}

export default Home;
