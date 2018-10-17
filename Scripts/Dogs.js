const breedListUrl = 'https://dog.ceo/api/breeds/list';
const breedImagesUrl = 'https://dog.ceo/api/breed/';

const app = angular.module("DogFilter", [])

    app.run(["DogsService", function(dogsService){
        dogsService.getDogBreeds();
    }])

    /**************************************
     ------------- Controllers ------------
     **************************************/
    app.controller("DogsController", ["DogsFactory",
        function(dogsFactory){
            var dogs = this;

            dogs.test = dogsFactory;
        }
    ])

    /**************************************
     ------------- Factories ------------
     **************************************/
    app.factory("DogsFactory", [
        function(){

            var factory = {
                test: "test",
                test2: "test2",
                breeds: "ajax"
            }

            return factory;
        }
    ])

    /**************************************
     ------------- Services ------------
     **************************************/
    app.service("DogsService", ["$http", "DogsFactory",
        function($http, dogsFactory){
            this.getDogBreeds = function (){
                $http.get(breedListUrl)
                    .then(function(result){
                        dogsFactory.breeds = result.data;
                    }, function(){
                        return "error";
                    })
            };
        }
    ])