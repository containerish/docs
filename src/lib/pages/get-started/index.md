---
lang: en-US
title: Getting Started
description: Text and Video tutorials on how to use Open Registry
---

# Getting Started

Working with OpenRegistry is no different than working with any other container registry.
We'd love for you to try and use OpenRegistry and provide feedback.
Following are the steps to get started:

## Sign-up

The sign-up process is essential as `Pushing` to container repositories is a restricted operation and requires proper authorization.
You can still browse through and `pull` container images on OpenRegistry if you do not wish to sign-up :)
Once you sign-up, you'll receive an Email verification link which is essential to activate your account.

## Sign-In

Once Signed-up and with your email verified, you should be directed to OpeRegistry logged in and thus enabling you to
unleash the power of `Pushing` container images

In addition to the above method, you can also choose to sign-in with Github which is literally the shortest and easiest
way to connect with OpenRegistry

[signin/signup]: 
## Using docker CLI:

Now comes a very tiny part which might feel a bit tricky. If you have signed-up with email and normal flow,
you can use the same username and password for Docker Login.
However, with Github you'll have to generate a PAT (Personal Access Token) which will serve as your password for Docker
Login. Don't be spooked by it, it's super simple. Just follow this guide for  
[Github PATs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
and you should be sorted. If you still find it difficult, we're here to help so just Hit Us Up!! 👍🏻

**To summarise**:

- for normal auth flow (through sign-up/sign-in)

```bash
docker login openregistry.dev
Username: janedoe
Password: <Password you used to sign-up>
```

- for Github flow (Sign-in with Github)

```bash
docker login openregistry.dev
Username: janedoe
Password: <PAT from Github>
```

## Push an Image

By default with `docker push` the images are pushed to DockerHub.
For Pushing images to OpenRegistry instead, the image must be tagged first:

- Add "openregistry.dev" prefix to every image that has to go to OpenRegistry
- Prefix the image name with your username (or Github Username when you sign-up with Github)
- For example, you have an **alpine:latest** image that you wish to push to OpeRegistry, use the following to tag the image:


```bash
docker tag <image-name>:<tag> openregistry.dev/<username>/<image-name>:<tag>
```

so for user: **janedoe** and image: **alpine:latest**, the command will be

```bash
docker tag alpine:latest openregistry.dev/janedoe/alpine:latest
```

Pushing the image works the same way as docker

```bash
docker push openregistry.dev/janedoe/alpine:latest
```

## Pull an Image

For pull Operations, all you have to do is copy the docker pull command for any image
from OpenRegistry and run it as it is in your terminal.<br>
To pull the above image from OpenRegistry:

```bash
docker pull openregistry.dev/janedoe/alpine:latest
```

## How to Run this project locally

OpenRegistry is not Go Gettable right now because of a dependency issue with Go-Skynet.
To build this project locally, please use the following method:

```
git clone https://github.com/containerish/OpenRegistry.git
make mod-fix
go build
```

## Next steps
[next steps](#push-an-image)
