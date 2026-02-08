ARC INTEL - Mission Companion UI
This is a standalone, Dockerized web application designed to serve as a tactical companion for ARC Raiders. It features a searchable mission registry, interactive checklists, and detailed tactical phase breakdowns.

📂 Project Structure/arc-intel
├── docker-compose.yml   # Deployment configuration
├── Dockerfile           # Image build instructions
├── index.html           # The core application (UI + logic)
├── missionRegistry.js   # Mission data (separated from UI)
├── nginx.conf           # Server configuration
└── Maps/                # [YOU CREATE THIS] Folder for mission images

🚀 Setup Instructions
1. Prepare the Maps
The application expects mission maps to be located in a folder named Maps in the same directory as the docker-compose.yml file.
-Create a folder named Maps inside your arc-intel folder.
-Drop all your map images (e.g., Picking Up the Pieces.png, Power Out.jpg) into this folder. Note: File names must match exactly what is in the code (case-sensitive).

2. Deploy with Docker
Ensure you have Docker and Docker Compose installed.
-Open your terminal or command prompt.
-Navigate to your project directory:

cd path/to/arc-intel

Run the following command to build and start the container:

docker-compose up -d --build

-d: Runs the container in the background (detached mode).
--build: Forces a rebuild of the image to ensure the latest index.html is used.

3. Access the AppOnce running, open your web browser and go to:http://localhost:8080

🛠 TroubleshootingImages not loading?
-Check the Maps folder name. It must be Maps (capital M), not maps.
-Check the file extensions. The code expects specific extensions (mostly .png, some .jpg or .jpeg as noted in the registry).
-Check Docker permissions. Ensure the container has read access to your local folder.

Updating Content
-To update the UI/logic: Edit index.html and run docker-compose up -d --build.
-To update mission data: Edit missionRegistry.js and run docker-compose up -d --build.
-To add/update maps: Simply drop them into the Maps folder. Refresh your browser; no container restart is required.

🛑 Stopping the App
-To stop the application, run:docker-compose down
