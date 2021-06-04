# Replace react-app with your container name
CONTAINER_NAME=react-app

# start local development
start:
	docker-compose up

# stop the containers
stop:
	docker-compose stop

# remove the containers, volumes, networks
remove:
	docker-compose down && rm -rf node_modules

# copy node_modules from inside container to host machine
mount:
	sudo docker container cp $(CONTAINER_NAME):/usr/src/app/node_modules . && sudo chmod -R 777 ./node_modules

# make container interactive
bash:
	docker container exec -it $(CONTAINER_NAME) /bin/sh