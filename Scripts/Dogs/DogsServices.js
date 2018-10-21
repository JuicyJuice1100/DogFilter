app.service("DogsService", ["$http", "$timeout", "HelperFactory", "DogsFactory", "ImageFactory",
    function($http, $timeout, helperFactory, dogsFactory, imageFactory){
        this.getDogBreeds = function (){
            helperFactory.loading.isLoading = true;
            $http.get(helperFactory.urls.breedListUrl)
                .then(function(result){
                    helperFactory.resetArray(dogsFactory.breeds); //resets all breeds to a blank array
                    var id = 0; //this will add ids to array of breeds
                    result.data.message.forEach(function(breed){ //gets all the breeds from dog.api and adds them to the breeds array
                        dogsFactory.breeds.push(
                            {
                                id: id,
                                name: breed.toUpperCase(),
                            }
                        );
                        id++; //this will increment id so each breed has a unique id   
                    });
                }, function(){ //insert error function here
                    helperFactory.validation.showErrorMessage = true; //show error message

                    $timeout(function(){ //hide error message after 5 seconds
                        helperFactory.validation.showErrorMessage = false;
                    }, 5000)
                }).finally(function(){
                    helperFactory.loading.isLoading = false; //hide loading gif
                });
        };
        this.getBreedImages = function (breed){
            helperFactory.loading.isLoading = true;
            $http.get(helperFactory.urls.breedImagesUrl + breed.toLowerCase() + "/images")
                .then(function(result){
                    helperFactory.resetArray(imageFactory.breedImages); //reset all images to a blank array
                    var id = 0;
                    result.data.message.forEach(function(image){ //gets all the images of given breed from dog.api and adds them to the image array
                        imageFactory.breedImages.push(
                            {
                                id: id,
                                link: image
                            }
                        );
                        id++;
                    });
                }, function(){ //insert error function here
                    helperFactory.validation.showErrorMessage = true; //show error message
                    
                    $timeout(function(){ //hide error message after 5 seconds
                        helperFactory.validation.showErrorMessage = false;
                    }, 5000)
                }).finally(function(){
                    helperFactory.loading.isLoading = false; //hide loading gif
                });
        };
    }
]);