# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your Express application listens on
EXPOSE 3030

# Start the Express application
CMD ["npm", "start"]