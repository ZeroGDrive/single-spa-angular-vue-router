# single-spa-angular-vue-router

This is a micro-fronend project using Angular and Vue and configured vue-router with examples in routing.

# running the project
1- clone all the branches: the vue branch and the master (which has the root-config) and the angular-mfe branch
2- place all the projects in a one folder and make sure to put the angular-mfe in a folder named angular-app and put the angular-app folder in the root folder that has all the projects
3- now open a terminal tab and cd into root-config folder and run yarn start or npm run start.
4- open another terminal tab and cd into vue-app and yarn serve:standalone or npm run serve:standalone.
5- open another terminal tab and cd into angular-app/angular-mfe and yarn start or npm run start.

go to http://localhost:9000 and you should see the app running.
the routes that are configured now are /hello, /test, /test2, you can find the test ones in the vue app while the hello in the angular app.
