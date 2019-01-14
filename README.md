# Project mobile application

- [Project mobile application](#project-mobile-application)
  - [Introduction](#introduction)
  - [App preview](#app-preview)
  - [Presentation of the app](#presentation-of-the-app)
  - [Installation procedure](#installation-procedure)
    - [Requirements](#requirements)
      - [Hardware](#hardware)
      - [Software](#software)
    - [How to install](#how-to-install)
  - [How to use Ionic DevApp](#how-to-use-ionic-devapp)

## Introduction

As part of the AppMob course from third and last year of Bachelor, we have created an API. This API is a travel journal, and we'll build an app to work with the API.

## App preview

In order to preview the app, please use your mobile device and go to this [link](http://tiny.cc/appmob-app) or test our interactive mock-up [here](https://xd.adobe.com/view/0bde5725-48a2-44d4-98ec-80ba0b79f1c6-5e8d/?fullscreen)

## Presentation of the app

To read and learn more about this app, please read the [app presentation here](https://github.com/Liozon/projet-appmob/blob/master/PRESENTATION.md).

## Installation procedure

### Requirements

If you want to run and test the app locally on your device, you'll need the following:

#### Hardware

- a PC or Mac computer
- a mobile device

#### Software

- [NPM](https://www.npmjs.com/), on your computer
- [Git](https://git-scm.com/downloads), on your computer
- [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp/), install it on your smartphone (require Android 4.1 or later // iOS 9.2 or later)

### How to install

1. First, download [a copy of this repo](https://github.com/Liozon/projet-appmob/archive/master.zip) on your computer

2. Unzip the folder on your computer

3. Open Git Bash, and navigate to the project folder using

    ```cd /path/to/the/folder```

4. Now, we need to install all the packages and dependencies for this project. To do so, run this command in Git Bash:

    ```npm install```

    NPM will parse all the dependencies declared in the `package.json` and `package-lock.json` files and install them in the project's folder

5. Once NPM has finished, to run the app on your computer and use the Ionic DevApp at the same time, run this command in Git Bash:

    ```ionic serve -c```

    This command compiles the code, and creates a webserver that'll run on your computer. A new tab on your favorite web browser will open, with the app running.
    To open the app in Ionic DevApp, go to the chapter [How to use Ionic DevApp](#how-to-use-ionic-devapp)

## How to use Ionic DevApp

You can run any Ionic app directly on your smartphone, and unleash the power of the geolocation, camera access, accelerometer and more.

Once you run the ```ionic serve -c``` command, open Ionic DevApp.

1. First, log in to your account or create one. Don't worry, it's absolutely free

    ![login screen](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/1.%20Login%20screen.jpg "Login Screen")

2. A list with running Ionic app will be displayed. Search your app within the list. To distinguish your app from the other, you can either use the name of the app and the name of your computer.

    **Make sure you're on the same network on both your computer and your smartphone !**

    ![App list](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/2.%20App%20list.jpg "App list")

3. Click on the name of your app to start using it with your smartphone, and voilà !

    ![Running app](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/3.%20App%20opened.jpg "Running app")

4. When you want to stop using it, and go back to the app list, just swipe down with three fingers or shake your device

    ![How to close app](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/4.%20Close%20app.jpg "How to close app")