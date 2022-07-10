#!/bin/bash

#create docker image for backend
docker build backend/ --tag socialize-backend:latest

#create docker image for backend
docker build frontend/ --tag socialize-frontend:latest

#start all services
docker-compose up -d