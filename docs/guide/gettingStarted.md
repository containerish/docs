---
lang: en-US
title: Getting Started
description: Text and Video tutorials on how to use Open Registry
---

# Getting Started

Working with OpenRegistry is no different than working with any other container registry.
We'd love for you to try and use OpenRegistry and provide feedback.
Following are the steps to get started:

### Register for Beta

Register yourself for our beta program at [OpenRegistry Beta](https://parachute.openregistry.dev/). We'll send out an invitation on your email with credentials which you can use to test Pull and Push on OpenRegistry

### Video Guide

Once you've got your credentials, you can follow the following guide or watch this video: 
<iframe src="https://player.vimeo.com/video/574351825" width="80%" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


### Sign-up

The sign process is essential as pushing to container repositories is a restricted operation and requires proper authorization.
Sign-up process is currently disabled and invitations are sent out which can be used to directly sign in.

### Sign-In

You can use OpenRegistry credentials to sign-in using docker CLI or the OpenRegistry frontend at [OpenRegistry](https://parachute.openregistry.dev)
    
- For docker CLI: 
```bash
docker login beta.openregistry.dev
Username: janedoe
Password: ***********
```
- For Web: <br>
We are working on adding login with github, gitlab, etc. 
In the meantime, use Email and Password to login through web. (these credentials will be shared with you through the invitation email)
```bash
Email: janedoe@gmail.com
Password: ***********
```

### Push an Image

By default, the images are pushed to DockerHub. 
For Pushing images to OpenRegistry instead, follow the below steps:
* Add "beta.openregistry.dev" prefix to every image that has to go to OpenRegistry
* Prefix the image name with your username (this username is same as the one you'll receive through the invitation email)
* For example, you have an **alpine:latest** image that you wish to push to OpeRegistry, use the following to tag the image:
```bash
docker tag <image-name>:<tag> beta.openregistry.dev/<username>/<image-name>:<tag>
```

so for user: janedoe and image: alpine:latest, the command will be

```bash
docker tag alpine:latest beta.openregistry.dev/janedoe/alpine:latest
```

Pushing the image works the same way as docker 

```bash
docker push beta.openregistry.dev/janedoe/alpine:latest
```

### Pull an Image

For pull Operations, all you have to do is copy the docker pull command for any image 
from OpenRegistry and run it as it is in your terminal.<br>
To pull the above image from OpenRegistry:

```bash
docker pull beta.openregistry.dev/janedoe/alpine:latest
```

### How to Run this project locally

OpenRegistry is not Go Gettable right now because of a dependency issue with Go-Skynet. To build this project locally, please use the following method:

```bash
git clone https://github.com/containerish/OpenRegistry.git
make mod-fix
go build
