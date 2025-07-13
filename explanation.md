# Docker IP Project Explanation

## 1. Choice of Base Image

To reduce image size, I used official minimal Node.js images with multi-stage builds:

- **Frontend**: `node:14-slim` and `alpine:3.16.7`
- **Backend**: `node:14` and `alpine:3.16.7`
- **Database**: Official `mongo:6` image

## 2. Dockerfile Directives

### Backend:
- Multi-stage to reduce final size
- `WORKDIR` to define working directory
- `COPY` and `RUN npm install` to set up dependencies
- `EXPOSE 5000` to open app port

### Frontend:
- Build optimized React app with `npm run build`
- Expose port 80 for production serving
- Multi-stage used for clean final image

## 3. Docker Compose Networking

Custom bridge network `yolo-net` allows seamless communication:
- `client` ↔ `backend` ↔ `mongo`
- Ports:
  - 3000: React frontend
  - 5000: Backend API
  - 27017: MongoDB

## 4. Volume Usage

Volume `mongo-data` ensures persistent MongoDB data across container restarts.

## 5. Git Workflow

- Proper repo: [https://github.com/Virgotex/yolo](https://github.com/Virgotex/yolo)
- Descriptive commit messages
- Used tagged builds and DockerHub pushes:
  ```bash
  docker tag <image_id> virgotex/yolo-client:v1.0.0
  docker push virgotex/yolo-client:v1.0.0
  ```

## 6. Successful Application Run

```bash
docker compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/api/products](http://localhost:5000/api/products)

## 7. Image Tagging and Size

- All images use `v1.0.0` tag
- Final sizes:
  - Backend: ~260MB
  - Client: ~77MB

## 8. Debugging Measures

- Addressed React OpenSSL build issue with updated environment
- Ensured `.env` variables loaded with `dotenv`
- Verified MongoDB Atlas connection
