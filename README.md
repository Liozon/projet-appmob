# Projet application mobile

- [Introduction](#introduction)
- [Preview](#preview)
- [How to install](#installation)
    - [Hardware](#hardware)
    - [Software](#software)
    - [Installation process](#installation-process)
- [Other](#other)

## Introduction

As part of the AppMob course from third and last year of Bachelor, we have created an API. This API is a travel journal, and we'll build an app to work with the API

## Preview

In order to preview the app, please use your mobile device and go to this [link](https://example.com).

## Installation

If you want to run and test the app locally on your device, you'll need the following:

### Hardware

- a PC or Mac computer
- a mobile device

### Software

- [NPM](https://www.npmjs.com/), on your computer
- [Git](https://git-scm.com/downloads), on your computer
- [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp/), install it on your smartphone (require Android 4.1 or later // iOS 9.2 or later)

### Installation process

1. First, download [a copy of this repo](https://github.com/Liozon/projet-appmob/archive/master.zip) on your computer

2. Unzip the folder on your computer

3. Open Git Bash, and navigate to the project folder using

    ```cd /path/to/the/folder```

4. Now, we need to install all the packages and dependecies for this project. To do so, run this command in Git Bash:

    ```npm install```

    NPM will parse all the dependencies declared in the `package.json` and `package-lock.json` files and install them in the project's folder

5. Once NPM has finish, to run the app on your computer and use the Ionic DevApp at the same time, run this command in Git Bash:

    ```ionic serve -c```