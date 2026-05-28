# Use the base image from Docker Hub
FROM node:20-alpine

# working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# install the dependencies
RUN npm install 

# Copy the reset of the application files
COPY . .

# Export the port your app will run on
EXPOSE 5173

# Start the application
CMD ["npm" , "run" , "dev"]