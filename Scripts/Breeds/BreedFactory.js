app.factory("BreedFactory", [
    function(){

        /******* Factory ******/
        //holds dog data
        var factory = {
            defaultSelect: "Select a Dog Breed...",
            breeds: [],
        }

        return factory;
    }
]);
