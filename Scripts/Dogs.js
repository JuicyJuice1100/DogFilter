const app = angular.module("DogFilter", [])

    app.run(["DogsService", function(dogsService){
        dogsService.getDogBreeds();
    }])

    /**************************************
     ------------- Controllers ------------
     **************************************/
    app.controller("DogsController", ["HelperFactory", "BreedFactory",
        function(helperFactory, breedFactory){
            var dogs = this;

            dogs.breedFactory = breedFactory;
            dogs.helperFactory = helperFactory;
        }
    ]);

    /**************************************
     ------------- Factories ------------
     **************************************/
    //helperFactory holds constant data that is used throughout the application, makes it easier to change simple data as you only have to change in one area
    app.factory("HelperFactory", [
        function(){
            var factory = {
                urls:{
                    breedListUrl: 'https://dog.ceo/api/breeds/list',
                    breedImagesUrl: 'https://dog.ceo/api/breed/'
                }
            }

            return factory;
        }
    ])
    app.factory("BreedFactory", [
        function(){

            //holds dog data
            var factory = {
                defaultSelect: "Select a Dog Breed...",
                allBreeds: []
            }

            return factory;
        }
    ]);

    /**************************************
     ------------- Services ------------
     **************************************/
    app.service("DogsService", ["$http", "HelperFactory", "BreedFactory",
        function($http, helperFactory, breedFactory){
            this.getDogBreeds = function (){
                $http.get(helperFactory.urls.breedListUrl)
                    .then(function(result){
                        var id = 0; //this will add ids to array of breeds
                        result.data.message.map(function(breed){
                            //goes through each object that is in json.data and adds it to the allBreeds array with an id and breed name
                            breedFactory.allBreeds.push(
                                {
                                    id: id,
                                    breed: breed,
                                }
                            );
                            id++; //this will increment id so each breed has a unique id   
                        });
                    }, function(){
                        return "error";
                    })
            };
        }
    ]);