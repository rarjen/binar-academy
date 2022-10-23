FROM node:16.18.0

# Create app directory
WORKDIR /usr/src/app

# Copy package.json kedalam docker
COPY package*.json ./


# Install Dependencies
RUN npm install

# Copy semua file
COPY . ./

CMD ["node", "app.js"]