# Yolo E-Commerce Platform (Dockerized)

This project is a containerized e-commerce platform built with the MERN stack and Docker.

## 🚀 Features

- React.js frontend
- Express.js backend
- MongoDB (via Atlas or local)
- Docker Compose orchestration
- Multi-stage image builds
- MongoDB data persistence

## 📦 Prerequisites

- Docker
- Docker Compose

## 🛠️ Running the Project

Clone and run with Docker Compose:

```bash
git clone https://github.com/Virgotex/yolo.git
cd yolo
docker compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/api/products](http://localhost:5000/api/products)

## 🐳 DockerHub Images

- [`virgotex/yolo-client`](https://hub.docker.com/r/virgotex/yolo-client)
- [`virgotex/yolo-backend`](https://hub.docker.com/r/virgotex/yolo-backend)

## 📸 DockerHub Screenshot

'screenshots/dockerhub.png'

## 🔐 Environment Variables

MongoDB Atlas URI is stored in `./backend/.env`:

```env
MONGODB_URI=your-mongo-uri
```

## 🗃️ Docker Volumes

Volume `mongo-data` is used for MongoDB data persistence.

## 👤 Author

**Carlton "Virgotex"**

