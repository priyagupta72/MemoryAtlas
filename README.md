# MemoryAtlas - Full Stack MERN Application

## Overview
MemoryAtlas is a social media application where users can create, update, and interact with travel memories. The app allows users to log in, create posts, update posts, like, comment, and delete posts. The app is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and includes a map feature to track the locations of travel memories.

## Features
- User Authentication: Create, log in, and log out of an account.
- Create and Edit Posts: Post your travel memories with titles, images, and descriptions.
- Likes and Comments: Interact with other users' posts by liking and commenting on them.
- Map Integration: View and search travel memories on a map based on geographical coordinates.
- Responsive UI: Built with Material UI for modern and responsive design.

## Technologies Used
  Frontend:
  - React.js
  - Redux Thunk (for state management)
  - Material UI (for UI components)
  - Leaflet (for the map functionality)
  - Axios (for API requests)

  Backend:
  - Node.js
  - Express.js
  - MongoDB (for data storage)

## Installation and Setup

### 1. Clone the repository
git clone <repository_url>
cd <project_folder>

### 2. Install Dependencies for Frontend and Backend
#### For Backend:
Navigate to the server folder and install the necessary dependencies:
cd server
npm install


#### For Frontend:
Navigate to the client folder and install the necessary dependencies:
cd client
npm install


### 3. Configure MongoDB
In the server folder, open the index.js file and configure your MongoDB Atlas connection with your username and password.


mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


### 4. Run the Application

#### For Backend:
Start the server in the server folder:
npm start


#### For Frontend:
Start the frontend in the client folder:
npm start

This will start both the frontend and backend servers. The frontend will typically be accessible at http://localhost:3000 and the backend at http://localhost:5000.

## Map Functionality
The app includes a map feature where users can search for locations and view their travel memories marked on the map. The map is powered by *Leaflet* and uses *OpenStreetMap* and *OpenTopoMap* for tile layers.

Search Locations*: Type a location in the search bar to get suggestions.
User Location*: Click on the location button to get your current geographical coordinates.
Memory Location: Mark your memories with a specific location on the map.

## Contributing
Feel free to fork the repository, make changes, and submit pull requests. Please follow the standard code of conduct, and ensure that your changes are tested.

## Deploy Your App
You can access the deployed application at: https://astounding-zuccutto-93b66a.netlify.app/posts.

## Acknowledgments
React: Frontend library for building the user interface.
Leaflet: JavaScript library for interactive maps.
MongoDB Atlas: Cloud database service used for storing user data.

##Screenshots

![Screenshot (19)](https://github.com/user-attachments/assets/2ad1ccbf-91d2-4542-bf38-6bc3d2f64781)
![Screenshot (21)](https://github.com/user-attachments/assets/e2ed089e-3c38-4f64-a3ae-7dceeead609a)
![Screenshot (20)](https://github.com/user-attachments/assets/ec0f4ea9-c1dc-4370-a445-02cefab37ce5)
![Screenshot (15)](https://github.com/user-attachments/assets/56229476-9f52-47fc-9d32-e44e947aad0f)
![Screenshot (18)](https://github.com/user-attachments/assets/db901ecf-3ca0-4355-9ab5-511c21e2e9ec)
![Screenshot (22)](https://github.com/user-attachments/assets/eda07775-88ba-4b76-ab03-43976852c759)





  
