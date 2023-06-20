---
title: Frequently asked questions
---
# FAQs

## How do I rename a OpenRegistry repository?
Currently, you cannot rename an OpenRegistry repository once it's been created. You will need to create a new repository with the name of your choice, move all relevant tags to the new repository created, and delete the existing repository you wish to rename.

## Can a repository be transferred to a different account?
Repositories can not be transferred to a different account. If you would like to transfer a repository to a different account, you will need to download any images You can then recreate the repository on the new account.

## I Signed in with GitHub, how can I docker login to pull/push images ?
You can use a PAT (Personal Access Token) from GitHub for Docker CLI login. To create a PAT, follow the official GitHub guide here: GitHub Doc for PAT and use the generated Personal Access Token as your password for docker login.
The username will same as your GitHub username

```bash
jane@openregistry:~$ docker login openregistry.dev
username: janedoe
password: ghp_25733a2a9e7e4840b4b2f1a512ed815c7e48bac5a608c5
Login Succeeded
jane@openregistry:~$
```

## How can I change my OpenRegistry Password

To change your OpenRegistry Password, go to your Profile -> Settings -> Change Password.
Enter the current password, new password and finally confirm the new password and there you have it! In case you forgot your OpenRegistry Password,  
please click on forgot password and you'll receive an email to reset the password

## How can I change my email?

Currently, this functionality is unavailable. However, we're working on integrating it into OpenRegistry with coming releases

**if you have any questions which couldn't be answered in the above section, please [write to us](../contact) and we will be happy to answer them. This will also help us expand our area of support**