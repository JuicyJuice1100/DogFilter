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

            dogs.dogsFactory = dogsFactory;
        }
    ])

    /**************************************
     ------------- Factories ------------
     **************************************/
    app.factory("DogsFactory", [
        function(){

            var factory = {
                allBreeds: []
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
                        var id = 0; //this will add ids to array of breeds
                        result.data.message.map(function(breed){
                            //goes through each object that is in json.data and adds it to the allBreeds array with an id and breed name
                            dogsFactory.allBreeds.push(
                                {
                                    id: id,
                                    breed: breed,
                                }
                            );
                            id++; //this willl increment id so each breed has a unique id   
                        });
                    }, function(){
                        return "error";
                    })
            };
        }
    ])