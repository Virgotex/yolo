# Stage 1: Build dependencies
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Final minimal image
FROM node:18-alpine

WORKDIR /app

# Copy only the built app
COPY --from=build /app /app

EXPOSE 5000

CMD ["node", "server.js"]
