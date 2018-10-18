app.service("DogsService", ["$http", "HelperFactory", "BreedFactory", "ImageFactory",
    function($http, helperFactory, breedFactory, imageFactory){
        this.getDogBreeds = function (){
            helperFactory.loading.isLoading = true;
            $http.get(helperFactory.urls.breedListUrl)
                .then(function(result){
                    helperFactory.resetArray(breedFactory.breeds); //resets all breeds to a blank array
                    var id = 0; //this will add ids to array of breeds
                    result.data.message.map(function(breed){
                        //goes through each object that is in json.data and adds it to the allBreeds array with an id and breed name
                        breedFactory.breeds.push(
                            {
                                id: id,
                                name: breed.toUpperCase(),
                            }
                        );
                        id++; //this will increment id so each breed has a unique id   
                    });
                }, function(){ //insert error function here
                    //TODO: return proper error message
                }).finally(function(){
                    helperFactory.loading.isLoading = false;
                });
        };
        this.getBreedImages = function (breed){
            helperFactory.loading.isLoading = true;
            $http.get(helperFactory.urls.breedImagesUrl + breed.toLowerCase() + "/images")
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
                }, function(){ //insert error function here
                    //TODO: return proper error message
                }).finally(function(){
                    helperFactory.loading.isLoading = false;
                });
        };
    }
]);