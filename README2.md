PROJECT OVERVIEW
This is a real time notes app that allows the user to enter a room, write a note and notify the other users that the user has joined and see the notes left.The app therefore is real time giving instant response once the user enters. This is possible with the use of socket.io

INSTALLATION STEPS:
To install the project,create two folders in the main folder,frontend and backend
In the backend folder,install  backend  dependencies,'npm install express mongoose dotenv cors socket.io'
Ensure that the server .js file is created and defined the environment.Connect to the database,mongodb
To set up the frontend folder,create the react app 'npm create vite@latest 'real-time-notes', then cd to the app and run the app.
Create the components folder where  Home and Room files will be stored.
Ensure that the code is connected to the backend by installing socket.io-client to connect to the database and get real time response.
Run the project by running the backend:'node server.js' and frontend 'npm run dev'

Key real time concepts
Some of the concepts used:
Socket.io that is bidirectional hence provides instant response once a client enters data.
UseState-allows addition of state to functional components
UseEffect-allows performance of side effects to the components
UseParams-returns a dynamic parameter of the URL that the user is currently on.

Deployement link:
Frontend:https://socket-frontend-mauve.vercel.app/
Backend:https://socketbackend-4ywb.onrender.com