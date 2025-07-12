# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:stable-alpine

# Copy production build to Nginx default public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port Nginx runs on
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
