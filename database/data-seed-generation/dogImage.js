//when AWS is set up have a base URL and change one of the last numbers on the URL
    //for now they will all use the same image url

    var dogImage = function() {
        var dogImages = [];

        for (var i = 0; i < 300; i++) {
            //currently hard coded for the same image but later will change out the 1 for i
            var number = Math.floor(Math.random() * 30) + 1

            dogImages.push('http://availabledogphotos.s3.amazonaws.com/'+ number + '.jpg')    
        }

        return dogImages;
    }

    module.exports = dogImage;