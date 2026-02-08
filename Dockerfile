# Use the lightweight Alpine Nginx image
FROM nginx:alpine

# Copy the custom Nginx configuration to the correct location
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the application files
COPY index.html /usr/share/nginx/html/index.html
COPY missionRegistry.js /usr/share/nginx/html/missionRegistry.js
COPY allMissionMaps.js /usr/share/nginx/html/allMissionMaps.js

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
