# Explanation.md

## Overview

This project demonstrates a complete DevOps pipeline using configuration management (Ansible), containerization (Docker), and virtual machine provisioning (Vagrant). The goal was to set up a fully functional e-commerce web application (YOLO App) using infrastructure-as-code principles.

## Stage 1: Local Provisioning with Vagrant & Ansible

### 1. Vagrant Setup

I defined a `Vagrantfile` that provisions an Ubuntu 22.04 virtual machine named `yolo-devops`. The VM installs Docker and sets up SSH access for Ansible provisioning.

### 2. DockerHub Images

Instead of building images locally, i pulled pre-built and versioned images from DockerHub:

* `virgotex/yolo-client:v1.0.1` (React frontend)
* `virgotex/yolo-backend:v1.0.0` (Express backend)

### 3. Ansible Roles

I created reusable roles for setting up:

* Docker network (`app-net`)
* MongoDB container (`app-mongo`) with named volume `mongo-data`
* Backend container (`yolo-backend`) connected to MongoDB
* Frontend container (`yolo-client`) exposing port 3000

All roles are idempotent, meaning re-running Ansible won't break the system.

### 4. Testing & Validation

* Backend API reachable at: `http://localhost:5000/api/products`
* Frontend web app available at: `http://localhost:3000`
* MongoDB data persists via volume across reboots

## Stage 2: (To be Done) - Infrastructure-as-Code with Terraform

The next stage would involve provisioning cloud infrastructure (e.g., AWS or DigitalOcean) using Terraform, then using Ansible to configure and deploy the containers on those remote instances.

## Why No Dockerfile or Compose Locally?

Instead of building images via Dockerfiles or managing them via `docker-compose.yaml`, i used pre-pushed, production-ready DockerHub images to demonstrate container orchestration using Ansible. This was done intentionally to meet rubric constraints and highlight configuration management instead of local builds.

## Summary

This project shows a working example of:

* Version-controlled provisioning with Vagrant and Ansible
* Pull-based Docker container orchestration
* Networked microservices architecture
* Persistent data via Docker volumes

---

Prepared by: **Carlton Kibe(Virgotex)**
