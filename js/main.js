$(document).ready(function() {
    
    $('.closeAll').on('click', function() {
        $(".hideOne,.hideTwo,.hideThree,.hideFour,.hideFive,.hideSix").hide();
    });
    
    $('.tapOne').on('click', function() {
        $(".hideOne").slideToggle();
        $(".hideTwo,.hideThree,.hideFour,.hideFive,.hideSix").hide();
    });

    $('.tapTwo').on('click', function() {
        $(".hideTwo").slideToggle();
        $(".hideOne,.hideThree,.hideFour,.hideFive,.hideSix").hide();
    });

    $('.tapThree').on('click', function() {
        $(".hideThree").slideToggle();
        $(".hideOne,.hideTwo,.hideFour,.hideFive,.hideSix").hide();
    });

    $('.tapFour').on('click', function() {
        $(".hideFour").slideToggle();
        $(".hideOne,.hideTwo,.hideThree,.hideFive,.hideSix").hide();
    });

    $('.tapFive').on('click', function() {
        $(".hideFive").slideToggle();
        $(".hideOne,.hideTwo,.hideThree,.hideFour,.hideSix").hide();
    });

    $('.tapSix').on('click', function() {
        $(".hideSix").slideToggle();
        $(".hideOne,.hideTwo,.hideThree,.hideFour,.hideFive").hide();
    });


});

/* ama ados c */