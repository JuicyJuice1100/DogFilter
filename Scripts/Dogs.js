const app = angular.module("DogFilter", [])

    app.run(["DogsService", function(dogsService){
        dogsService.getDogBreeds();
    }])

    /**************************************
     ------------- Controllers ------------
     **************************************/
    app.controller("DogsController", ["HelperFactory", "BreedFactory", "ImageFactory", "DogsService",
        function(helperFactory, breedFactory, imageFactory, dogsService){
            var dogs = this;

            /*********** Factories **********/
            dogs.breedFactory = breedFactory;
            dogs.imageFactory = imageFactory;
            dogs.helperFactory = helperFactory;

            /*********** Functions **********/
            dogs.getBreedImages = function(breed){
                dogsService.getBreedImages(breed);
            };
        }
    ]);

    /**************************************
     ------------- Factories ------------
     **************************************/
    //helperFactory holds constant data that is used throughout the application, makes it easier to change simple data as you only have to change in one area
    app.factory("HelperFactory", [
        function(){
            // var mapArrayOfItemsWithId = function(item, label, array){
            //     var id = 0;

            //     item.map(function(){
            //         array.push({
            //             id: id,
            //             label: 
            //         })
            //     })
            // }

            var resetArray = function(array){
                angular.copy([], array);
            }

            var factory = {
                urls:{
                    breedListUrl: 'https://dog.ceo/api/breeds/list',
                    breedImagesUrl: 'https://dog.ceo/api/breed/'
                },
                /********* functions  ***********/
                resetArray: resetArray
                // MapArrayOfItemsWithId: mapArrayOfItemsWithId
            }

            return factory;
        }
    ]);

    app.factory("BreedFactory", ["HelperFactory",
        function(helperFactory){

            /******* Factory ******/
            //holds dog data
            var factory = {
                defaultSelect: "Select a Dog Breed...",
                breeds: [],

                /******** Functions ********/
                // resetAllBreeds: () => helperFactory.resetArray(this.allBreeds)
            }

            return factory;
        }
    ]);

    app.factory("ImageFactory", ["HelperFactory",
        function(helperFactory){

            //holds image data
            var factory = {
                breedImages: [],
                
                /******** Functions **********/
                // resetAllImages: () => helperFactory.resetArray(factory.breedImages)
            }

            return factory;
        }
    ])

    /**************************************
     ------------- Services ------------
     **************************************/
    app.service("DogsService", ["$http", "HelperFactory", "BreedFactory", "ImageFactory",
        function($http, helperFactory, breedFactory, imageFactory){
            this.getDogBreeds = function (){
                $http.get(helperFactory.urls.breedListUrl)
                    .then(function(result){
                        helperFactory.resetArray(breedFactory.breeds); //resets all breeds to a blank array
                        var id = 0; //this will add ids to array of breeds
                        result.data.message.map(function(breed){
                            //goes through each object that is in json.data and adds it to the allBreeds array with an id and breed name
                            breedFactory.breeds.push(
                                {
                                    id: id,
                                    name: breed,
                                }
                            );
                            id++; //this will increment id so each breed has a unique id   
                        });
                    }, function(){
                        return "error";
                    })
            };
            this.getBreedImages = function (breed){
                $http.get(helperFactory.urls.breedImagesUrl + breed + "/images")
                    .then(function(result){
                        helperFactory.resetArray(imageFactory.breedImages); //reset all images to a blank array
                        var id = 0;
                        result.data.message.map(function(image){
                            imageFactory.breedImages.push(
                                {
                                    id: id,
                                    link: image
                                }
                            );
                            id++;
                        });
                    }, function(){
                        return "error";
                    })
            };
        }
    ]);