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

You can use OpenRegistry credentials to sign-in using docker CLI or the OpenRegistry frontend at [parachute](https://parachute.openregistry.dev)
    
- For docker CLI: 
```bash
docker login beta.openregistry.dev
Username: janedoe
Password: ***********
```

### Push an Image

By default, the images are pushed to DockerHub. For Pushing images to OpenRegistry instead, follow the below steps:
* change the name of your image, e.g you have an image named janedoe/alpine:latest, change it like so:

```bash
docker tag janedoe/alpine:latest beta.openregistry.dev/janedoe/alipne:latest
docker push beta.openregistry.dev/janedoe/alpine:latest
```

### Pull an Image

Assuming you've pushed an image using the above method:

```bash
docker pull beta.openregistry.dev/janedoe/alpine:latest
```

### How to Run this project locally

OpenRegistry is not Go Gettable right now because of a dependency issue with Go-Skynet. To build this project locally, please use the following method:

```bash
git clone https://github.com/containerish/OpenRegistry.git
make mod-fix
go build
