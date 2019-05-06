

$(document).ready(function () {
    var goal, current, yellowNumber, redNumber, blueNumber, greenNumber;

    // Var to track wins,losses and total

    playerTotal = 0;
    wins = 0;
    losses = 0;
    current = 0;
    newTotal = 0;

    //   Display random number to guess
    goal = Math.floor(Math.random() * 101 + 19);


    //    Reset game function

    var resetGame = function () {
        goal = Math.floor(Math.random() * 101 + 19);
        console.log(goal);
        playerTotal = 0;
        current = 0;
        yellowNumber = Math.floor(Math.random() * 12);
        redNumber = Math.floor(Math.random() * 12);
        blueNumber = Math.floor(Math.random() * 12);
        greenNumber = Math.floor(Math.random() * 12);
        $(".random-number").text(goal);
        $("#final").text(playerTotal);
    }

    resetGame();

    // Generate random numbers for every crystal

    $("#button-yellow").attr('value', yellowNumber);
    $("#button-red").attr('value', redNumber);
    $("#button-blue").attr('value', blueNumber);
    $("#button-green").attr('value', greenNumber);



    //  Dispaly wins

    function congrats() {
        console.log("You are the winner!")
        wins++
        $("#wins").text(wins)
        resetGame();

    };

    //    Display losses

    function lost() {
        console.log("You are a losser")
        losses++
        $("#losses").text(losses);
        resetGame();
    }


    // Clicking Crystals


    $('#button-red').click(function () {
        current += parseInt($(this).attr('value'));
        compare()
        $("#final").text(current);
        console.log("current", current);
        console.log("playertotal", playerTotal);
    });




    $('#button-blue ').click(function () {
        current += parseInt($(this).attr('value'));
        $("#final").text(current);
        compare()
        console.log(current);
    });



    $('#button-yellow').click(function () {
        current += parseInt($(this).attr('value'));
        $("#final").text(current);
        compare()
        console.log(current);
    });



    $('#button-green').click(function () {
        current += parseInt($(this).attr('value'));
        $("#final").text(current);
        compare()
        console.log(current);
    });


    // The Game

    function compare() {
        if (current === goal) {
            $("#final").text(playerTotal);
            congrats()
        } else if (current > goal) {
            console.log(playerTotal);
            lost();
        }

    }

});





