const app = angular.module("DogFilter", ["ngMask"])

//this will get the breeds on page load before anything controllers and factories are initialized
app.run(["DogsService", function(dogsService){
    dogsService.getDogBreeds();
}])