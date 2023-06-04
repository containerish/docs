---
lang: en-US
title: All about Containers
description: General guide to containers ecosystem
---

# All About Containers

## What are Containers ?

In modern world of Tech, Containers are just like a handy fanny pack carrying everything that you need to go by the day. Containers are nothing but a standard piece of software that packages up your code and all it's dependencies and thus making is easier to run the application quickly without worrying much about different environments.

**Container Image:** A container image is binary representation of everything needed to run the application which includes, your code, runtime, system tools & libraries and settings.
At runtime, a container image becomes a Container. Using containers has revolutionized the application development. Running the applications using Containers is reliable, secure and portable.


## Why Containers and How do they work?

Before understanding how containers work, let's understand how the application development, building and deployment took place when the containers weren't around.
1. The traditional approach was to run the applications on in-house servers. Predicting the traffic a quarter ahead and stashing the hardware on guess game which often resulted in underutilized resources, higher costs or falling short and being unable to serve.
   
2. Then came virtualization concepts that helped horizontal scaling by allowing to run multiple applications within the same server thus saving hardware. Figure 1.1 represents how Virtualization works
   
   ![virtualisation](/vms.png)

   Virtual Machines are just like they sound, a single machine acting like multiple machines.
   A hypervisor allows multiple virtual machines to run on a single server. Each of the VMs contains a full copy of Operating system, the code and the dependencies which, who are we kidding takes up 10s of GBs and let's be honest Virtualization is not cheap.

3. In 2013, software development was on the brink of evolution when Docker came along and changed the game forever. They gave us **Containers**. Here's how containers in operation look like:
   
   ![containers](/containers.png)

   Containers reside in App layer, holding your code and dependencies together. Multiple containers can run on a single machine and share the same Operating system kernel and thus unlike virtualization take up less space, can handle more apps and require less resources.
   Each container runs as an isolated process in user space.

## Problems with Traditional Approach and how Containers solve them

Now that we have a basic understanding of what it looks like, let's see what are the challenges we face with traditional approach and how containers solve them:
Running an application on a server comprises of 2 things -
building the application and deploying the application on the server.

1. Imagine trying to build your application only to endup with server having higher package/library versions than the one you used in code. You might not want to make changes in your application always which leaves you with re-configuring the server ? Now imaging doing that for 10 servers (if not 100s). Since you have a large user base, deployments happen on scale.  
   
   **Solution:**
   with containers, all you have to do is start with a base OS image, bundle your code along with all the dependencies and throw it in a tarball. This tarball is your container image which on runtime becomes a Container. This can be shared among different platforms without worrying about the configuration on host that might break your application.

2. Let's discuss the second part, Deploying your application on a server (without container).
   you build your application with features from latest version of Java/Nodejs/Pyhton/Go/etc but the OS on the server only supports an older version which now breaks you application. You will either have to refactor the code to remove the latest features or install a newer OS that supports your application language (Java/Nodejs/Python/etc) on each and every server you deploy on?  

   **Solution:**
   With Containers, all you have to do is download the tarball, unpack it in a directory and run the program like any other program on your machine (all of which is handled by the container runtime). It'll work on the server, your neighbour's desktop and your colleagues laptop just like it ran on your machine.
   No more of "...but it worked on my machine" problems.

## What is a Container Registry?

Sharing is caring, it's often very useful to share container images since it saves tons of effort and time. Container Registry is just about that. It's like Dropbox except instead of your dog pics and videos, it accommodates container images. There are public registries and private registries each have their own use cases. Like uploading and downloading content from Dropbox, you could Push and Pull images to and from a container registry.
We at OpenRegistry are an Open Source container registry, find out more about us in [about](./about.md)

## References

The above documentation takes huge insperation from following sources:
- [docker official documentation](https://www.docker.com/resources/what-container)
	
