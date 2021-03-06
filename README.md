# Project mobile application

- [Project mobile application](#project-mobile-application)
  - [Introduction](#introduction)
  - [App preview](#app-preview)
  - [Presentation of the app](#presentation-of-the-app)
    - [Goals of the app](#goals-of-the-app)
    - [Functionalities](#functionalities)
    - [Rendering](#rendering)
    - [Technologies used](#technologies-used)
  - [Installation procedure](#installation-procedure)
    - [Requirements](#requirements)
      - [Hardware](#hardware)
      - [Software](#software)
    - [How to install](#how-to-install)
  - [How to use Ionic DevApp](#how-to-use-ionic-devapp)

## Introduction

![Apps rendering](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/0.%20Smatphone%20screen.png "Apps rendering")

As part of the AppMob course from third and last year of Bachelor, we have created an API. This API is a travel journal, and we'll build an app to work with the API.

## App preview

We really recommend that you first download the app and compile it with Ionic first, like [described here](#installation-procedure).

But if you want to preview the app without all the hassle of installing stuff and compiling the code, please use your mobile device and go to [this link](http://tiny.cc/appmob-app) to test the app live or you can test our interactive mock-up [here](https://xd.adobe.com/view/0bde5725-48a2-44d4-98ec-80ba0b79f1c6-5e8d/?fullscreen).

## Presentation of the app

### Goals of the app

This application aims to centralize and log all your trips and places you visit. TraveLog aims to use geolocation and images to accurately catalog your travels.

In addition, you can share your travels with all TraveLog users, and discover your next trip to organize!

Based on an API, this application can be used on any smartphone running iOS or Android, but also tablets and desktop devices.

### Functionalities

Here is a list of all functionalities of the app:

- Account creation
- Account login
- Picture creation
- Place creation
- Place search
- Trip creation
- Trip search
- User profile edit
- User search

### Rendering

Home screen:

![Home screen](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Home%20screen.png "Home screen")

Trips list:

![Trips list](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Trips%20list.png "Trips list")

Trip modification:

![Trips modification](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Trip%20modification.png "Trips modification")

Places list:

![Places list](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Places%20list.png "Places list")

Place modification:

![Places list](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Place%20modification.png "Places modification")

Users list:

![Users list](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Users%20list.png "Users modification")

User details:

![User details](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Other%20user%20details.png "User details")

Your details:

![Your details](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/Pages/Account%20page.png "Your details")

### Technologies used

For developping this app, we used the following technologies:

- [Travel Log API](https://comem-travel-log-api.herokuapp.com/)
- [Ionic](https://ionicframework.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp/)
- [JavaScript](https://www.javascript.com/)
- [HTML 5](https://www.w3.org/TR/html52/)
- [CSS](https://www.w3.org/Style/CSS/)
- [NPM](https://www.npmjs.com/)

## Installation procedure

### Requirements

If you want to run and test the app locally on your device, you'll need the following:

#### Hardware

- a PC or Mac
- a mobile device (it looks like our app runs better on Android for the moment. Sorry, fruits lovers)

#### Software

- [NPM](https://www.npmjs.com/), on your computer
- [Git](https://git-scm.com/downloads), on your computer
- [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp/), install it on your smartphone (require Android 4.1 or later // iOS 9.2 or later)

### How to install

1. First, download [a copy of this repo](https://github.com/Liozon/projet-appmob/archive/master.zip) on your computer

2. Unzip the folder on your computer

3. Navigate to `src/app/config.sample.ts` and duplicate it in the same folder

4. Rename the new file to `config.ts`

5. In this file, replace every `API_URL_HERE` and `API_KEY_HERE` with your own APi URLs and keys

    ```typescript
        export const config = {
            apiUrl: 'API_URL_HERE',
            qimgUrl: 'API_URL_HERE',
            qimgSecret: 'API_KEY_HERE'
        }
    ```

6. Open Git Bash, and navigate to the project folder using

    ```bash
    cd /path/to/the/folder
    ```

7. Now, we need to install all the packages and dependencies for this project. To do so, run this command in Git Bash:

    ```bash
    npm install
    ```

    NPM will parse all the dependencies declared in the `package.json` and `package-lock.json` files and install them in the project's folder

8. Once NPM has finished, to run the app on your computer and use the Ionic DevApp at the same time, run this command in Git Bash:

    ```bash
    ionic serve -c
    ```

    This command compiles the code, and creates a webserver that'll run on your computer. A new tab on your favorite web browser will open, with the app running.
    To open the app in Ionic DevApp, go to the chapter [How to use Ionic DevApp](#how-to-use-ionic-devapp)

## How to use Ionic DevApp

You can run any Ionic app directly on your smartphone, and unleash the power of the geolocation, camera access, accelerometer and more.

Once you run the ```ionic serve -c``` command, open Ionic DevApp.

1. First, log in to your account or create one. Don't worry, it's absolutely free

    ![login screen](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/1.%20Login%20screen.png "Login Screen")

2. A list with running Ionic app will be displayed. Search your app within the list. To distinguish your app from the other, you can either use the name of the app and the name of your computer.

    **Make sure you're on the same network on both your computer and your smartphone !**

    ![App list](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/2.%20App%20list.png "App list")

3. Click on the name of your app to start using it with your smartphone, and voilà !

    ![Running app](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/3.%20App%20opened.png "Running app")

4. When you want to stop using it, and go back to the app list, just swipe down with three fingers or shake your device

    ![How to close app](https://raw.githubusercontent.com/Liozon/projet-appmob/master/screenshots/4.%20Close%20app.png "How to close app")