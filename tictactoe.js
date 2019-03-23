var O_x = 0;
var user_turn;
var array = [, " ", " ", " ", " ", " ", " ", " ", " ", " "];
var max;
var end = 0;
var loop = 0;
var x=1;
TTT();
function TTT() {
    while (loop == 0 && x<=5) {

        getUserInput();
        if (user_turn == "play again") {
            loop = 1;
            replay();

        }
        while (user_turn > 9 || user_turn == 0) {
            alert("Invalid entry");
            getUserInput();
        }

        try {
            if (array[user_turn] !== " ") {
                alert("this place already have this value : " + array[user_turn]);
            }
            else {
                array[user_turn] = 0;

                console.log(array[1] + " | " + array[2] + " | " + array[3]);
                console.log(array[4] + " | " + array[5] + " | " + array[6]);
                console.log(array[7] + " | " + array[8] + " | " + array[9]);
                console.log("                                                                        ");
                console.log("------------------------------------------------------------------------");

            }
        }
        catch (e) { }


        checkWinner();


        compTurn();

        console.log(array[1] + " | " + array[2] + " | " + array[3]);
        console.log(array[4] + " | " + array[5] + " | " + array[6]);
        console.log(array[7] + " | " + array[8] + " | " + array[9]);
        console.log("                                                                        ");
        console.log("------------------------------------------------------------------------");

        checkWinner();
        x++;
    }
    if(x>5){
        alert("match Draw!!!!!!!!!!");
        replay();
    }
}

function getUserInput() {
    user_turn = prompt("Enter the value where u want to play your  turn -> between (1-9) ");
}

function checkWinner() {
    if (array[1] !== " " && array[1] === array[2] && array[1] === array[3]) {
        selectWinner(array[1], array[2], array[3]);
    }

    if (array[4] !== " " && array[4] === array[5] && array[4] === array[6]) {
        selectWinner(array[4], array[5], array[6]);
    }

    if (array[7] !== " " && array[7] === array[8] && array[7] === array[9]) {
        selectWinner(array[7], array[8], array[9]);
    }

    if (array[1] !== " " && array[1] === array[4] && array[1] === array[7]) {
        selectWinner(array[1], array[4], array[7]);
    }

    if (array[2] !== " " && array[2] === array[5] && array[2] === array[8]) {
        selectWinner(array[2], array[5], array[8]);
    }

    if (array[3] !== " " && array[3] === array[6] && array[3] === array[9]) {
        selectWinner(array[3], array[6], array[9]);
    }

    if (array[1] !== " " && array[1] === array[5] && array[1] === array[9]) {
        selectWinner(array[1], array[5], array[9]);
    }

    if (array[3] !== " " && array[3] === array[5] && array[3] === array[7]) {
        selectWinner(array[3], array[5], array[7]);
    }

}

function compTurn() {

    if (array[1] !== " " && array[1] === array[2] && array[1] === array[3]) {
        selectWinner(array[1], array[2], array[3]);
    }

    if (array[4] !== " " && array[4] === array[5] && array[4] === array[6]) {
        selectWinner(array[4], array[5], array[6]);
    }

    if (array[7] !== " " && array[7] === array[8] && array[7] === array[9]) {
        selectWinner(array[7], array[8], array[9]);
    }

    if (array[1] !== " " && array[1] === array[4] && array[1] === array[7]) {
        selectWinner(array[1], array[4], array[7]);
    }

    if (array[2] !== " " && array[2] === array[5] && array[2] === array[8]) {
        selectWinner(array[2], array[5], array[8]);
    }

    if (array[3] !== " " && array[3] === array[6] && array[3] === array[9]) {
        selectWinner(array[3], array[6], array[9]);
    }

    if (array[1] !== " " && array[1] === array[5] && array[1] === array[9]) {
        selectWinner(array[1], array[5], array[9]);
    }

    if (array[3] !== " " && array[3] === array[5] && array[3] === array[7]) {
        selectWinner(array[3], array[5], array[7]);
    }

}

function compTurn() {
    if (array[1] === 1 && array[2] === 1 && array[3] === " ") {
        array[3] = 1;
    }
    else if (array[1] === 1 && array[3] === 1 && array[2] === " ") {
        array[2] = 1;
    }
    else if (array[2] === 1 && array[3] === 1 && array[1] === " ") {
        array[1] = 1;
    }
    else if (array[1] === 1 && array[4] === 1 && array[7] === " ") {
        array[7] = 1;
    }
    else if (array[1] === 1 && array[7] === 1 && array[4] === " ") {
        array[4] = 1;
    }
    else if (array[4] === 1 && array[7] === 1 && array[1] === " ") {
        array[1] = 1;
    }
    else if (array[1] === 1 && array[5] === 1 && array[9] === " ") {
        array[9] = 1;
    }
    else if (array[1] === 1 && array[9] === 1 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 1 && array[9] === 1 && array[1] === " ") {
        array[1] = 1;
    }





    else if (array[4] === 1 && array[5] === 1 && array[6] === " ") {
        array[6] = 1;
    }
    else if (array[4] === 1 && array[6] === 1 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 1 && array[6] === 1 && array[4] === " ") {
        array[4] = 1;
    }
    else if (array[2] === 1 && array[5] === 1 && array[8] === " ") {
        array[8] = 1;
    }
    else if (array[2] === 1 && array[8] === 1 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 1 && array[8] === 1 && array[2] === " ") {
        array[2] = 1;
    }





    else if (array[7] === 1 && array[8] === 1 && array[9] === " ") {
        array[9] = 1;
    }
    else if (array[7] === 1 && array[9] === 1 && array[8] === " ") {
        array[8] = 1;
    }
    else if (array[8] === 1 && array[9] === 1 && array[7] === " ") {
        array[7] = 1;
    }
    else if (array[3] === 1 && array[6] === 1 && array[9] === " ") {
        array[9] = 1;
    }
    else if (array[3] === 1 && array[9] === 1 && array[6] === " ") {
        array[6] = 1;
    }
    else if (array[6] === 1 && array[9] === 1 && array[3] === " ") {
        array[3] = 1;
    }
    else if (array[3] === 1 && array[5] === 1 && array[7] === " ") {
        array[7] = 1;
    }
    else if (array[3] === 1 && array[7] === 1 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 1 && array[7] === 1 && array[3] === " ") {
        array[3] = 1;
    }





    else if (array[1] === 0 && array[2] === 0 && array[3] === " ") {
        array[3] = 1;
    }
    else if (array[1] === 0 && array[3] === 0 && array[2] === " ") {
        array[2] = 1;
    }
    else if (array[2] === 0 && array[3] === 0 && array[1] === " ") {
        array[1] = 1;
    }
    else if (array[1] === 0 && array[4] === 0 && array[7] === " ") {
        array[7] = 1;
    }
    else if (array[1] === 0 && array[7] === 0 && array[4] === " ") {
        array[4] = 1;
    }
    else if (array[4] === 0 && array[7] === 0 && array[1] === " ") {
        array[1] = 1;
    }
    else if (array[1] === 0 && array[5] === 0 && array[9] === " ") {
        array[9] = 1;
    }
    else if (array[1] === 0 && array[9] === 0 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 0 && array[9] === 0 && array[1] === " ") {
        array[1] = 1;
    }





    else if (array[4] === 0 && array[5] === 0 && array[6] === " ") {
        array[6] = 1;
    }
    else if (array[4] === 0 && array[6] === 0 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 0 && array[6] === 0 && array[4] === " ") {
        array[4] = 1;
    }
    else if (array[2] === 0 && array[5] === 0 && array[8] === " ") {
        array[8] = 1;
    }
    else if (array[2] === 0 && array[8] === 0 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 0 && array[8] === 0 && array[2] === " ") {
        array[2] = 1;
    }





    else if (array[7] === 0 && array[8] === 0 && array[9] === " ") {
        array[9] = 1;
    }
    else if (array[7] === 0 && array[9] === 0 && array[8] === " ") {
        array[8] = 1;
    }
    else if (array[8] === 0 && array[9] === 0 && array[7] === " ") {
        array[7] = 1;
    }
    else if (array[3] === 0 && array[6] === 0 && array[9] === " ") {
        array[9] = 1;
    }
    else if (array[3] === 0 && array[9] === 0 && array[6] === " ") {
        array[6] = 1;
    }
    else if (array[6] === 0 && array[9] === 0 && array[3] === " ") {
        array[3] = 1;
    }
    else if (array[3] === 0 && array[5] === 0 && array[7] === " ") {
        array[7] = 1;
    }
    else if (array[3] === 0 && array[7] === 0 && array[5] === " ") {
        array[5] = 1;
    }
    else if (array[5] === 0 && array[7] === 0 && array[3] === " ") {
        array[3] = 1;
    }


    else if (array[4] === 0 && array[8] === 0 && array[7] === " " && array[1] === " " && array[9] === " ") {
        array[7] = 1;
    }
    else if (array[2] === 0 && array[6] === 0 && array[3] === " " && array[1] === " " && array[9] === " ") {
        array[3] = 1;
    }
    else if (array[3] === 0 && array[4] === 0 && array[1] === " " && array[7] === " " && array[2] === " ") {
        array[8] = 1;
    }
    else if (array[4] === 0 && array[9] === 0 && array[1] === " " && array[7] === " " && array[8] === " ") {
        array[7] = 1;
    }

    else if (array[6] === 0 && array[5] === 1 && array[4] !== " ") {
        if (array[3] === " ") {
            array[3] = 1;
        }
        else if (array[2] === " ") {
            array[2] = 1;
        }
        else if (array[9] === " ") {
            array[9] = 1;
        }
        else if (array[8] === " ") {
            array[8] = 1;
        }
        else if (array[1] === " ") {
            array[1] = 1;
        }
        else if (array[7] === " ") {
            array[7] = 1;
        }
    }
    else if (array[4] === 0 && array[5] === 1 && array[6] !== " ") {
        if (array[1] === " ") {
            array[1] = 1;
        }
        else if (array[2] === " ") {
            array[2] = 1;
        }
        else if (array[7] === " ") {
            array[9] = 1;
        }
        else if (array[8] === " ") {
            array[8] = 1;
        }
        else if (array[3] === " ") {
            array[3] = 1;
        }
        else if (array[9] === " ") {
            array[9] = 1;
        }
    }


    else if (array[1] === 0 && array[2] === " " && array[3] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }
        else if (array[4] === " ") {
            array[4] = 1;
        }

        else if (array[6] === " ") {
            array[6] = 1;
        }

        else if (array[8] === " ") {
            array[8] = 1;
        }

        else {
            array[3] = 1;
        }
    }
    else if (array[2] === 0 && array[1] === " " && array[3] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }

        else {
            array[3] = 1;
        }
    }
    else if (array[3] === 0 && array[1] === " " && array[2] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }

        else if (array[4] === " ") {
            array[4] = 1;
        }

        else if (array[6] === " ") {
            array[6] = 1;
        }

        else if (array[8] === " ") {
            array[8] = 1;
        }
        else {
            array[1] = 1;
        }
    }

    else if (array[4] === 0 && array[6] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }
        else if (array[2] === " ") {
            array[2] = 1;
        }
        else if (array[8] === " ") {
            array[8] = 1;
        }
        else if (array[1] === " ") {
            array[1] = 1;
        }
        else if (array[3] === " ") {
            array[3] = 1;
        }
        else if (array[7] === " ") {
            array[7] = 1;
        }
        else if (array[9] === " ") {
            array[9] = 1;
        }



    }
    else if (array[5] === 0 && array[4] === " " && array[6] === " ") {
        if (array[1] === " ") {
            array[1] = 1;
        }
        else if (array[3] === " ") {
            array[3] = 1;
        }
        else if (array[7] === " ") {
            array[7] = 1;
        }
        else if (array[9] === " ") {
            array[9] = 1;
        }
        else {
            array[6] = 1;
        }
    }
    else if (array[6] === 0 && array[4] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }
        else if (array[3] === " ") {
            array[3] = 1;
        }
        else if (array[9] === " ") {
            array[9] = 1;
        }
        else if (array[4] === " ") {
            array[4] = 1;
        }
        else if (array[8] === " ") {
            array[8] = 1;
        }
        else if (array[3] === " ") {
            array[3] = 1;
        }
        else if (array[1] === " ") {
            array[1] = 1;
        }
    }

    else if (array[7] === 0 && array[8] === " " && array[9] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }

        else if (array[4] === " ") {
            array[4] = 1;
        }

        else if (array[6] === " ") {
            array[6] = 1;
        }

        else if (array[2] === " ") {
            array[8] = 1;
        }
        else {
            array[9] = 1;
        }
    }
    else if (array[8] === 0 && array[7] === " " && array[9] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }
        else {
            array[7] = 1;
        }
    }
    else if (array[9] === 0 && array[7] === " " && array[8] === " ") {
        if (array[5] === " ") {
            array[5] = 1;
        }

        else if (array[4] === " ") {
            array[4] = 1;
        }

        else if (array[6] === " ") {
            array[6] = 1;
        }

        else if (array[2] === " ") {
            array[8] = 1;
        }
        else {
            array[7] = 1;
        }
    }



}


function selectWinner(A, B, C) {
    if (A == 0) {
        loop = 1;
        x=1;

        alert("You won!!!!!!!!!!!!");

    }
    else if (A == 1) {
        loop = 1;
        x=1;
        alert("You loss!!!!!!!!!!!");
    }
    replay();
}

function replay() {
    loop=1;
    x=1;

    for (var i = 1; i <= 9; i++) {
        array[i] = " ";
    }
    console.log(array[1] + " | " + array[2] + " | " + array[3]);
        console.log(array[4] + " | " + array[5] + " | " + array[6]);
        console.log(array[7] + " | " + array[8] + " | " + array[9]);
        console.log("                                                                        ");
        console.log("------------------------------------------------------------------------");

        loop = 0;
        TTT();
}