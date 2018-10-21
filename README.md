# DogFilter

AngularJS 1.7.5 web application using the open dogs api (api available at: https://dog.ceo/dog-api/).

# Requirements
+ npm (needed: 5.x+)

# Install & Run
+ npm install
+ npm start

# Release 
V 1.0.1
+ transitioning to ES6
+ cleaned controller and services
+ cleaned html
+ added npm start for staring application
+ added http-server to package.json

V 1.0.0
+ Gets images from dog api based on selected breed
+ Search bar will filter breeds
+ Search bar will clear on click
+ When you search you can hit enter to search verbatim what is in search bar.  (Must type exact breed name)
+ Search bar uses ng-mask.  Accepts only [a-zA-Z].
+ On devices larger than 800px use different css
+ Can click images to open in new tab

# Packages

npm for package management
+ ng-mask (package can be found https://github.com/candreoliveira/ngMask)
+ http-server (https://www.npmjs.com/package/http-server)

# Other 

+ Icon image taken from icons8 (https://icons8.com)

# TODO
+ use components, will help transition better to angular6+
+ add bundling for scripts
+ seperate templates from index.html
+ remove id's that are not needed for css
+ move open api to a simple db, json-server or MVC to sql 
