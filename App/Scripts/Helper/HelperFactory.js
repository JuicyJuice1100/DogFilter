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
                invalidBreedMessage: "Please Enter a Valid Dog Breed",
                showInvalidBreedMessage: false,
                errorMessage: "Unable to get to connect to Database.  Please try again or check internet connection.",
                showErrorMessage: false,
            },
            loading:{
                image: "Content/Images/loading.gif",
                alt: "Loading...",
                isLoading: false
            },
            /********* functions  ***********/
            resetArray: resetArray
        }

        return factory;
    }
]);