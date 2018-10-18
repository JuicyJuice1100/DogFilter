app.controller("DogsController", ["$timeout", "HelperFactory", "BreedFactory", "ImageFactory", "DogsService",
    function($timeout, helperFactory, breedFactory, imageFactory, dogsService){
        var dogs = this;

        /*********** Factories **********/
        dogs.breedFactory = breedFactory;
        dogs.imageFactory = imageFactory;
        dogs.helperFactory = helperFactory;

        /*********** Functions **********/
        dogs.getBreedImages = function(breed){
            if(breedFactory.breeds.some(dog => dog.name.toLowerCase() === breed.toLowerCase())){ //checks to see if the input is valid
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
    }
]);