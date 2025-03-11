import React ,{useEffect,useState} from 'react'
import {socket} from "../socket";
import { useParams } from "react-router-dom";


function Room() {
    const {room}=useParams();
    const [content,setContent]=useState("");

    useEffect(()=>{
        socket.emit("joinRoom",room);
        socket.on("load-note",(noteContent)=>{
            setContent(noteContent);
        });
        socket.on("updateNotes",(updatedCOntent)=>{
            setContent(updatedContent);
        });

        socket.on("userJoined",(username)=>{
          alert(`${username} has joined the room`);
        });
        socket.on("userLeft",(username)=>{
          alert(`${username} has left the room`);
        })
        return ()=>{
            socket.off("updateNotes");
            socket.off("userJoined");
            socket.off("userLeft");
        };

    },[room]);
    const handleChange=(e)=>{
        setContent(e.target.value);
        socket.emit("editNotes",{room,content:e.target.value});
    };

  return (
      <div className="h-screen flex flex-col items-center bg-gray-100">
      <h2 className="text-2xl font-bold mt-4">Room: {room}</h2>
      <textarea
        value={content}
        onChange={handleChange}
        className="w-3/4 h-64 p-4 border rounded mt-4 text-black"
      />
    </div>
  )
}

export default Room
