$(document).ready(function() {
    /* For Closing any pop up and dropDown */
    $('.closeAll').on('click', function() {
        $(".hideOne,.hideTwo,.hideThree,.hideFour,.hideFive,.hideSix,.choose-menu,.filter-menu,.ellipsisMenu").slideUp();
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

    $('.fillter-btn').on('click', function() {
        $(".filter-menu").slideToggle(500);
        $(".hideOne,.hideTwo,.hideThree,.hideFour,.hideFive,.hideSix").hide();
        $(".choose-menu").slideUp();
    });

    $('.choose-btn').on('click', function() {
        $(".choose-menu").slideToggle(500);
        $(".hideOne,.hideTwo,.hideThree,.hideFour,.hideFive,.hideSix").hide();
        $(".filter-menu").slideUp();
    });

    $("tr:odd").css("background-color", "rgba(49, 68, 85, 0.1)");

    $('.sorts').on('click', function() {
        $(this).toggleClass('rotate180');
        console.log("yea")
    });
    
    $('.ellipsis-btn').on('click', function() {
        $('.ellipsisMenu').slideToggle();
    });

    $('.ellipsisCheck-one input[type="checkbox"]', ).click(function() {
        if ($(this).prop("checked") == true) {
            $(".ellipsisOne").hide();
        } else if ($(this).prop("checked") == false) {
            $(".ellipsisOne").show();
        }
    });

    $('.ellipsisCheck-two input[type="checkbox"]', ).click(function() {
        if ($(this).prop("checked") == true) {
            $(".ellipsisTwo").hide();
        } else if ($(this).prop("checked") == false) {
            $(".ellipsisTwo").show();
        }
    });

    $('.ellipsisCheck-three input[type="checkbox"]', ).click(function() {
        if ($(this).prop("checked") == true) {
            $(".ellipsisThree").hide();
        } else if ($(this).prop("checked") == false) {
            $(".ellipsisThree").show();
        }
    });

    $('.ellipsisCheck-four input[type="checkbox"]', ).click(function() {
        if ($(this).prop("checked") == true) {
            $(".ellipsisFour").hide();
        } else if ($(this).prop("checked") == false) {
            $(".ellipsisFour").show();
        }
    });

    $('.ellipsisCheck-five input[type="checkbox"]', ).click(function() {
        if ($(this).prop("checked") == true) {
            $(".ellipsisFive").hide();
        } else if ($(this).prop("checked") == false) {
            $(".ellipsisFive").show();
        }
    });

    $('.ellipsisCheck-six input[type="checkbox"]', ).click(function() {
        if ($(this).prop("checked") == true) {
            $(".ellipsisSix").hide();
        } else if ($(this).prop("checked") == false) {
            $(".ellipsisSix").show();
        }
    });

    $('#toggle').click(function(event) {
        if (this.checked) {
            $('.checkNum input[type="checkbox"]').prop('checked', true);
        } else {
            $('.checkNum input[type="checkbox"]').prop('checked', false);
        }
    });

});

/* ama ados c */