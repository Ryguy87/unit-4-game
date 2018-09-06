$(document).ready(function () {
    // Create random number between 19 and 120
    var number = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log(number);
    //show random number to user

    var randomNumberField = $("#randomNumber");
    randomNumberField.text(number);

    //crystal values
    var crystalValue = [];

    var y = 0;

    while (crystalValue.length < 4) {
        var randomValue = Math.floor(Math.random() * (12 - 1 + 1) + 1); //8...8...9...9
        if (crystalValue.indexOf(randomValue) === -1) {
            crystalValue.push(randomValue)
        }
        y++;
    }
    console.log(crystalValue)

    //Create crystals/buttons
    var Crystals = [1, 2, 3, 4];

    var crystalImages = ["assets/images/redcrystal.jpg", "assets/images/bluecrystal.jpg", "assets/images/yellowcrystal.jpg", "assets/images/greencrystal.jpg"];

    var buttonField = $("#button1");
    buttonField.text(crystalImages["0"]);

    for (var i = 0; i < crystalImages.length; i++) {

        var imageCrystal = $("<img>");
        // "<img />"
        imageCrystal.addClass("crystal-image img-responsive");
        imageCrystal.css({
            "height": "150px",
            "width": "150px"
        });
        // "<img class='crystla-image'" />
        imageCrystal.attr("src", crystalImages[i]);
        //give crystal value
        imageCrystal.attr("data-crystal", crystalValue[i])

        // "<img class='crystal-image'  src='"
        $("#buttonSection").append(imageCrystal);


    }
    //button click event
    $("#buttonSection").click(function() {
        console.log(event.target.attributes[2].value);
        var clickEvent = event.target.attributes[2].value;
    });
    //users score
    var playerScore = 0;
    //add users guesses to total score
   



}); // end of script