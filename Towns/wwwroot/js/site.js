var list; 



$(document).ready(function () {
    $.get("Home/GetTown", function (data, status) {
        list = data;
        console.log(data);
    });
});

function start() {
    document.getElementById("rules").remove();
    var lastChar = randomTown(randomChar(list), list);

    document.addEventListener('keyup', function (event) {
        if (event.code === 'Enter') {
            if (document.getElementById("txt").value[0] === lastChar || document.getElementById("txt").value[0] === lastChar.toUpperCase()) {
                randomTown(document.getElementById("txt").value[document.getElementById("txt").value.length - 1], list);
            }
            else if (document.getElementById("txt").value === '') { alert("Input something!"); }
            else {
                document.getElementById("response1").textContent = "You lose!:)";
                document.getElementById("response2").textContent = "Wooh-ha-ha-ha!";
            }
        }
    });

}
function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

function randomTown(char, townList) {
    if (Object(townList)[char] === null) {
        document.getElementById("response1").textContent = "You win!:(";
        document.getElementById("response2").textContent = "I'll be back!";
    }
    else {
        document.getElementById("response1").textContent = Object(townList)[char];
        var lastChar = Object(townList)[char][Object(townList)[char].length - 1];
        document.getElementById("response2").textContent = "You have \"" + lastChar + "\"!";
        return lastChar;
    }
}


function randomChar(townList) {
    var keys = Object.keys(townList);
    var counter = randomInteger(1, 13);
    return keys[counter];
}
var name = prompt("Input your name, please: ");
if (name == "") {
    name = "Player 2";
}
document.getElementById("name").textContent = name;
