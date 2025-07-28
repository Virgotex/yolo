# Yolo E-Commerce Platform (DevOps Edition)

This project is a fully containerized and automated e-commerce platform built using the MERN stack, Docker, Vagrant, and Ansible.

## 🚀 Features

* React.js frontend
* Express.js backend
* MongoDB (via containerized service)
* Docker Compose orchestration
* Ansible-based container deployment
* Vagrant for virtualized environment provisioning
* MongoDB data persistence via Docker volumes

## 📦 Prerequisites

* Vagrant
* VirtualBox
* Ansible (on host)
* Git

## 🛠️ Running the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Virgotex/yolo.git
cd yolo
```

### 2. Start the Virtual Machine

```bash
vagrant up
```

This will:

* Provision an Ubuntu VM named `yolo-devops`
* Use Ansible to pull and run containers via Docker

### 3. Access the Services

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:5000/api/products](http://localhost:5000/api/products)

## 🐳 DockerHub Images

* [`virgotex/yolo-client`](https://hub.docker.com/r/virgotex/yolo-client) `v1.0.1`
* [`virgotex/yolo-backend`](https://hub.docker.com/r/virgotex/yolo-backend) `v1.0.0`

## 🔐 Environment Variables

MongoDB connection is configured using `.env` file inside the backend folder.

```env
MONGODB_URI=your-mongodb-uri
```

## 🗓️ Docker Volumes & Network

* MongoDB data persists via named volume `mongo-data`
* Custom bridge network `yolo-net` connects all services

## 🧐 DevOps Workflow Summary

* Vagrant VM created as development environment
* Ansible pulls and launches Docker containers from DockerHub
* Environment is reproducible and version-controlled

## 👤 Author

**Carlton "Virgotex"**
