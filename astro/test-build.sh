#!/bin/bash

set -e

IMAGE=astro-site-img
CONTAINER=astro-site

echo "Stopping old container (if exists)..."
docker stop $CONTAINER 2>/dev/null || true

echo "Removing old container..."
docker rm $CONTAINER 2>/dev/null || true

echo "Removing old image..."
docker rmi $IMAGE 2>/dev/null || true

echo "Building new image..."
docker build -f Dockerfile.test -t $IMAGE .

echo "Starting new container..."
docker run -d --rm --name $CONTAINER -p 8080:80 $IMAGE

echo "Container started successfully!"
echo "Access your site at: http://localhost:8080"
echo "To stop the container: docker stop $CONTAINER"
