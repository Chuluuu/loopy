#!/bin/bash
# docker compose -f docker-compose.yml down
# docker compose -f docker-compose.yml up --build -d

if command -v docker-compose &>/dev/null; then
    echo "Using docker-compose"
    docker-compose -f docker-compose.yml down
    docker-compose -f docker-compose.yml up --build -d
else
    echo "Using docker compose"
    docker compose -f docker-compose.yml down
    docker compose -f docker-compose.yml up --build -d
fi
