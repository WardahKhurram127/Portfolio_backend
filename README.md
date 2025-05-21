# Portfolio_backend_MongoDB
This is a full-stack developer portfolio built with **React.js (Frontend)** and a custom **Node.js + Express.js (Backend)** integrated with **MongoDB**. The project features a dynamic Skills section where skill data is fetched from the backend rather than being hardcoded.
## MongoDB_Connection
For Education:
![image](https://github.com/user-attachments/assets/3bb5c740-8740-49eb-9743-c15db7605b88)
![image](https://github.com/user-attachments/assets/0ea85877-9272-4c29-963f-3d361025d249)
For Skills:
![image](https://github.com/user-attachments/assets/26b2c6dc-c2e3-4a69-a13c-a7406310f27e)
For Projects:
![image](https://github.com/user-attachments/assets/1e7ec1f4-9fe7-4030-9a8a-3448f73a946e)
For experiences:
![image](https://github.com/user-attachments/assets/b1cce428-b844-49de-af8f-d267ed7411bd)

## Postman_collection
![image](https://github.com/user-attachments/assets/73e54eef-91a3-457e-93a2-45c5504ae522)
Education:

POST:
![image](https://github.com/user-attachments/assets/81ed0f6e-e065-4fdb-8dfa-f13c7634a2c4)
![image](https://github.com/user-attachments/assets/dbf22fe3-c54f-4ae9-90d7-e9bc1db67c70)
![image](https://github.com/user-attachments/assets/d309b693-9524-46a0-82c1-02707ace5bb6)

GET:
![image](https://github.com/user-attachments/assets/9b2c1290-6d6c-4431-99da-a81ad9a65730)
![image](https://github.com/user-attachments/assets/c49c5cca-cddb-4e67-8339-c617755e7568)

Experience:
POST:


## Running the Backend Locally
To run the backend server locally and connect it with the MongoDB database (portfolio_backend), follow these steps:

1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd portfolio-backend
2. Install Dependencies
npm install
3. Create a .env File
MONGODB_URI=mongodb://localhost:27017/portfolio_backend
PORT=5000
⚠️ Replace the URI with your actual MongoDB connection string if using Atlas or a remote DB.
4. Start MongoDB Server (if running locally)
Make sure your local MongoDB server is running. You can start it with:
mongod
5. Run the Backend Server
npm run dev
If successful, the console should show:
Connected to MongoDB
Server running on http://localhost:5000
