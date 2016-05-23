# voten.me app
The voting app

## Getting started
voten.me is a funny app made to learn and show how to build an entire web app with web modern tools. It is also made to show the trust of the citizens in the actual spanish politician class (just to have a reason to make an app). The app is currently in beta and need some improvements to be completely stable.

## Architecture
The app is entirely built on Google Cloud Platform an it uses the following services:
* Google App Engine (Flexible Environment - NodeJS)
* Google Cloud Datastore
* Google Cloud Storage

## Modules
We have organized the app in two different modules of Google App Engine
* default (or client). That is a node-express app which serves the client static files and routes the different paths.
* api. Another node-express app which serves the RESTful api.

## Client
The client module is a web app made with Angular 1.5. It also uses different angular public modules like ui-router, ng-resource and others.
The main components are divided in three classes:
* Business (where are represented the View models and Data Services)
* Presentation (web components of the application)
* View (the views and routes of the app)

To serve the common single-page app, we have created a nodejs server which serves the static files and routes all the paths to index.html. 

## API
The api module exposes a RESTful api made with NodeJS and Express. It allows to Create, Read, Update and Delete (CRUD) the different entities needed in the app. In this particular case is enough with two different entities: User and Candidate.

These entities are kept in Google Cloud Datastore.

Besides, we wanted to represent the Candidates with a picture of themselves, so we chose Google Cloud Storage to keep all the pictures or photos in a public bucket.

The actual modules are public at:
*https://api-dot.votenme.appspot.com
*https://votenme.appspot.com

We have also routed the default module to a custom domain:
http://voten.me

##Install
If you want to install the app, follow these steps.

1. Clone the repo
```
$ git clone https://github.com/archelogos/votenme
```

2. Serve client
```
$ cd client
$ npm install
$ gulp serve:dist
```

3. Serve api
```
$ cd api
$ npm run monitor
```

## Contact
@Sergio_Gordillo on Twitter
