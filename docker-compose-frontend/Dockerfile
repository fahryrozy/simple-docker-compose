FROM node:14-alpine
# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build
EXPOSE 3000
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
