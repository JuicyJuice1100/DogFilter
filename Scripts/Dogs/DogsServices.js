app.service("DogsService", ["$http", "$timeout", "HelperFactory", "DogsFactory", "ImageFactory",
    function ($http, $timeout, helperFactory, dogsFactory, imageFactory) {
        const services = {
            getDogBreeds: () => {
                helperFactory.loading.isLoading = true;
                $http.get(helperFactory.urls.breedListUrl)
                    .then((result) => {
                        helperFactory.resetArray(dogsFactory.breeds); //resets all breeds to a blank array
                        var id = 0; //this will add ids to array of breeds
                        result.data.message.forEach((breed) =>{ //gets all the breeds from dog.api and adds them to the breeds array
                            dogsFactory.breeds.push(
                                {
                                    id: id,
                                    name: breed.toUpperCase(),
                                }
                            );
                            id++; //this will increment id so each breed has a unique id   
                        });
                    }, () => { //insert error function here
                        helperFactory.validation.showErrorMessage = true; //show error message

                        $timeout(() => { //hide error message after 5 seconds
                            helperFactory.validation.showErrorMessage = false;
                        }, 5000)
                    }).finally(() => {
                        helperFactory.loading.isLoading = false; //hide loading gif
                    });
            },
            getBreedImages: (breed) => {
                dogsFactory.search = breed;
                if (dogsFactory.breeds.some(dog => dog.name.toLowerCase() === breed.toLowerCase())) { //checks to see if the input is valid
                    helperFactory.loading.isLoading = true;
                    $http.get(helperFactory.urls.breedImagesUrl + breed.toLowerCase() + "/images")
                        .then((result) => {
                            helperFactory.resetArray(imageFactory.breedImages); //reset all images to a blank array
                            var id = 0;
                            result.data.message.forEach((image) => { //gets all the images of given breed from dog.api and adds them to the image array
                                imageFactory.breedImages.push(
                                    {
                                        id: id,
                                        link: image
                                    }
                                );
                                id++;
                            });
                        }, () => { //insert error function here
                            helperFactory.validation.showErrorMessage = true; //show error message

                            $timeout(() => { //hide error message after 5 seconds
                                helperFactory.validation.showErrorMessage = false;
                            }, 5000)
                        }).finally(() => {
                            helperFactory.loading.isLoading = false; //hide loading gif
                        });
                } else { //if input is not valid then show validation message
                    helperFactory.validation.showInvalidBreedMessage = true;
                    $timeout(() => {
                        helperFactory.validation.showInvalidBreedMessage = false;
                    }, 5000)
                }

            }
        }
        return services;
    }
]);