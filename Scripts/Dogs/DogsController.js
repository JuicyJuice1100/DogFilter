app.controller("DogsController", ["$timeout", "HelperFactory", "DogsFactory", "ImageFactory", "DogsService",
    function($timeout, helperFactory, dogsFactory, imageFactory, dogsService){
        var dogs = this;

        /*********** Factories **********/
        dogs.dogsFactory = dogsFactory;
        dogs.imageFactory = imageFactory;
        dogs.helperFactory = helperFactory;

        /*********** Functions **********/
        dogs.getBreedImages = function(breed){
            dogs.dogsFactory.search = breed;
            if(dogsFactory.breeds.some(dog => dog.name.toLowerCase() === breed.toLowerCase())){ //checks to see if the input is valid
                dogsService.getBreedImages(breed);
            } else {
                helperFactory.validation.showInvalidBreedMessage = true;
                $timeout(function(){
                    helperFactory.validation.showInvalidBreedMessage = false;
                }, 5000)
            }  
        };

        dogs.reset = function(){
            helperFactory.resetArray(imageFactory.breedImages);
        };

        dogs.resetSearch = function(){
            dogsFactory.search = ""
        }
    }
]);