angular.module("DogFilter", [])

    /**************************************
     ------------- Controllers ------------
     **************************************/
    .controller("DogsController", ["DogsFactory",
        function(dogsFactory){
            var dogs = this;

            dogs.test = dogsFactory;
        }
    ])

    /**************************************
     ------------- Factories ------------
     **************************************/
    .factory("DogsFactory", [
        function(){
            var factory = {
                test: "test",
                test2: "test2"
            }

            return factory;
        }
    ])

    /**************************************
     ------------- Services ------------
     **************************************/
    .service("DogsService", ["$http",
        function(){
            this.getDogBreeds = function (){
                
            }
        }
    ])