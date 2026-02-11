#!/bin/bash

set -e

IMAGE=astro-site-main-img
CONTAINER=astro-site-main

echo "Stopping old container (if exists)..."
docker stop $CONTAINER 2>/dev/null || true

echo "Removing old container..."
docker rm $CONTAINER 2>/dev/null || true

echo "Removing old image..."
docker rmi $IMAGE 2>/dev/null || true

echo "Building new image..."
docker build -f Dockerfile.serve.main -t $IMAGE .

echo "Starting new container..."
docker run -d --rm --name $CONTAINER -p 8080:80 $IMAGE

echo "Access your main site at: http://localhost:8080"
