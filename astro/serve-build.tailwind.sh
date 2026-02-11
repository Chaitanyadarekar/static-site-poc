#!/bin/bash

set -e

IMAGE=astro-site-tailwind-img
CONTAINER=astro-site-tailwind

echo "Stopping old container (if exists)..."
docker stop $CONTAINER 2>/dev/null || true

echo "Removing old container..."
docker rm $CONTAINER 2>/dev/null || true

echo "Removing old image..."
docker rmi $IMAGE 2>/dev/null || true

echo "Building new image..."
docker build -f Dockerfile.serve.tailwind -t $IMAGE .

echo "Starting new container..."
docker run -d --rm --name $CONTAINER -p 8081:80 $IMAGE

echo "Access your tailwind site at: http://localhost:8081"
