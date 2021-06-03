# WUALLANX'S REACT STARTER KIT
A minimal front-end template for building web application with ReactJS

## Features
- Wuallanx's React Starter Kit comes to the latest tech stack
- Local development with Docker

## Tech Stack
- React 17
- Webpack 5, ESLint, Babel, Prettier
- Docker (20+ recommend)

## Requirements
- NodeJS 15+, NPM package manager
- Any IDE or Editor you love

## Getting Started

Method 1:

- Clone repo
  
  ```bash
    git clone https://github.com/wuallanx/react-starter.git
  ```
- Install node dependencies

  ```bash
    npm install
  ```
- Launch the app at http://localhost:8080 (you can change the port number in webpack dev server configs)

Method 2:

- Go to https://github.com/wuallanx/react-starter

- Click **Use This Template** button. This will create a new repository with this template

## Local development with Docker

### Prerequisites

- You can install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) on your host machine

### Makefile scripts

- ```make run``` - Run docker containers
- ```make stop``` - Stop docker containers
- ```make remove``` - Remove docker containers, networks and volumes
- ```make mount``` - Copy node_modules from inside container to host machine (for code autocompletion, ...)
- ```make bash``` - Make container interactive (for installing dependencies, ...)

### Usage

- After cloning the repo and meeting prerequisites, you can run your docker container

  ```bash
    make run
  ```

- Then copy *node_modules* folder from your container to host machine

  ```bash
    make mount
  ```

- Enjoy!

---

Make with ♥ by Allan Wu