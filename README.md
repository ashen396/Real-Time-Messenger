# Real-Time-Messenger

This application uses React with Express and Node.js. The server and client both included. Socket.IO is used for the communication between clients.

Express with NodeJS is used for the server. It listens for any requests made combined with Socket.IO for real-time communication.

Socket.IO Client is used with React for retrieval and sending of messages.

Clone the git repository and navigate to the file system

Two sub-directories named as server and websushi will be visible

# Installing Dependencies On Server

Navigate to the server folder and open command prompt or terminal from the folder and type:

    npm install

# Start Server

Once all the dependencies are installed, type in the console:

    node App.js

If the server runs, no errors will pop up in the console

# Installing Dependencies On Client

Navigate back the folder structure to the websushi folder

Open another console and type:

    npm install

# Start Client

After downloading and installing dependencies, type

    npm start


It will a open browser window

If the browser window does not open, try opening a browser and typing in the url

    localhost:3000

# Login Page

The login credentials page will be directed

Type any username and password and continue

Remember the username will be the logged in user

If the user logins successfully, try opening another window on the browser and login in with a different username
Type something and try chatting with each other


# Chat Page

Multiple users can chat with each other

Self messages are displayed to the right with a green bubble and mentione as 'Me' on top

Messages received are displayed to the left with a blue bubble and name on top of the message

Users can sign out and login with another user name with button next to the username on top