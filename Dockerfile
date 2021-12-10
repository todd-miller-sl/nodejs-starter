# Base image
FROM node:16.13.1

# Set working directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Start server
EXPOSE 3000
CMD [ "npm", "start" ]
