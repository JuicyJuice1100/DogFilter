//helperFactory holds constant data that is used throughout the application, makes it easier to change simple data as you only have to change in one area
app.factory("HelperFactory", [
    function(){
        var resetArray = function(array){
            angular.copy([], array);
        }

        var factory = {
            urls:{
                breedListUrl: 'https://dog.ceo/api/breeds/list',
                breedImagesUrl: 'https://dog.ceo/api/breed/'
            },
            validation:{
                invalidBreedMessage: "Breed not in Database",
                showInvalidBreedMessage: false
            },
            loading:{
                image: "../Content/Images/loading.gif",
                alt: "Loading...",
                isLoading: false
            },
            /********* functions  ***********/
            resetArray: resetArray
        }

        return factory;
    }
]);

//this will get the breeds on page load before anything controllers and factories are initialized
app.run(["DogsService", function(dogsService){
    dogsService.getDogBreeds();
}])