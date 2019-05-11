# Commands

## Local Developement

1. `docker-compose up`

## To Deploy

### Docker Compose

In `docker-compose.yml` change the `nashvillesoftwareschool/jsonserverapi` image name to the following pattern.

```sh
your_docker_user_id/appropriate_image_name
```

For example, if you create a Docker hub account and your user id is `davidpaul` then you could provide an image label of:

```sh
davidpaul/capstoneapi
```

Then run the command `docker-compose build` to build your own Docker image.

### Push to Docker Hub

Once the image is built, run `docker push your_docker_user_id/image_name_you_chose`. This will upload your image to the Docker Hub service. This is exactly like you pushing your code from your local machine to Github. Your Docker image is now public and can be pulled down on to your Digital Ocean droplet to run.

### Deploy to Droplet

Open a new terminal and `ssh` into your droplet.

Run the following command to pull your image.

```sh
docker pull your_docker_user_id/image_name_you_chose
```

Once that process completes, create a new container based on that image.

```sh
docker run -d -p 3000:3000 --rm --name capstone_api your_docker_user_id/image_name_you_chose
```
