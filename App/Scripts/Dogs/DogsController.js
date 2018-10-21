app.controller("DogsController", ["$scope", "HelperFactory", "DogsFactory", "ImageFactory", "DogsService",
    function($scope, helperFactory, dogsFactory, imageFactory, dogsService){
        /*********** Factories **********/
        $scope.dogsFactory = dogsFactory;
        $scope.imageFactory = imageFactory;
        $scope.helperFactory = helperFactory;

        /*********** Services ***********/
        $scope.getBreedImages = (breed) => dogsService.getBreedImages(breed);

        /*********** Functions **********/
        $scope.reset = function(){
            helperFactory.resetArray(imageFactory.breedImages);
        };

        $scope.resetSearch = function(){
            dogsFactory.search = ""
        }
    }
]);