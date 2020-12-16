# Zenklub

This project was generated using Nx

## Overview

The goal of this project is to create a semi-clone of zenklub page. It was made in Nx workspace with a monorepo that contains both the backend and angular app in one repository. The app is also responsive.

## Live Server

The application is running at https://practical-allen-b21440.netlify.app/
The backend is running at https://zenklub-api-edu.herokuapp.com/api -> it has a cold start so please after opening the app try reloading in 30s to see real production speed

## Design

My main idea was to create a landing page that connects with the end-user and has quick data for him to navigate. It has different view for better experience in mobile. It uses bootstrap due to time concerns. And it also has an color scheme to suit the goal of the application.

## CI/CD

The app has continous integration with any push to the main branch triggering a build on heroku and on the front-end, saving time with deploys

## Runnin locally

To run localy run the command: nx serve zenklub and nx serve api

## Running unit tests

To run unit tests run the comand nx test zenklub or partner to run specific lib or app tests to run all nx run-many --all --target=test "--ci"

## Running end-to-end tests

Run `ng e2e zenklub` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

## Next steps

- remove bootstrap
- add better e2e
- add server side rendering and pwa support
