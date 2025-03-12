# Stage 1: Build
FROM node:20.18.0-bullseye AS build

WORKDIR /app

COPY package.json ./

RUN npm install

# Copy the rest of the application files (including public and src folders)
COPY src ./src
COPY public ./public

RUN npm run build

# Print all the files in the build folder
RUN ls -l /app/build

# Delete node_modules after build to reduce image size
RUN rm -rf node_modules

# Stage 2: Runtime (Serving the React App)
FROM node:20.18.0-bullseye

# Set the working directory for the runtime container
WORKDIR /app

# Installing 'serve' globally to serve the React app
RUN npm install -g serve

RUN npm install cors

# Copy the build folder and other necessary files from the build stage
COPY --from=build /app/build /app/build

# Expose the port that the React app will run on
EXPOSE 80


# Inject backend URL at runtime and serve the app
CMD echo "Backend URL: ${BACKEND_URL}" && sed -i "s|BACKEND_URL|${BACKEND_URL}|g" /app/build/config.js && \
# Serve the app
serve -s build -l 80