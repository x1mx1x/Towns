var list; 
var LastChar;
$(document).ready(function()
{
    $.get("Game/GetTown", function (data)
    {
        list = data;
        console.log(data);
    });
});

var name = prompt("Input your name, please: ");
if (name === "")
{
    name = "Player 2";
}
document.getElementById("name").textContent = name;


function start()
{
    document.getElementById("rules").remove();
    LastChar = randomTown(randomChar(list), list);

    document.addEventListener('keyup', function (event)
    {
        if (event.code === 'Enter')
        {
            if (document.getElementById("txt").value === '')
            {
                alert("Input something!");
            }
            else if (document.getElementById("txt").value[0].toUpperCase()
                === LastChar.toUpperCase
                            || document.getElementById("txt").value[0].toUpperCase()
                                    === LastChar.toUpperCase())
            {
                randomTown(document.getElementById("txt")
                     .value[document.getElementById("txt").value.length - 1], list);
            }
            else
            {
                document.getElementById("response1").textContent = "You lose!:)";
                document.getElementById("response2").textContent = "Wooh-ha-ha-ha!";
            }
        }
    });

}

function randomInteger(min, max)
{
    return Math.round(min + Math.random() * (max - min));
}

function randomChar(townList)
{
    var keys = Object.keys(townList);
    var counter = randomInteger(1, 7);
    console.log(keys[counter])
    return keys[counter];
}

function randomTown(char, townList)
{
    if (townList[char.toUpperCase()] == null)
    {
        document.getElementById("response1").textContent = "You win!:(";
        document.getElementById("response2").textContent = "I'll be back!";
    }
    else
    {
        document.getElementById("response1").textContent = townList[char.toUpperCase()];
        LastChar = townList[char.toUpperCase()][townList[char.toUpperCase()].length - 1];
        document.getElementById("response2").textContent = "You have \"" + LastChar + "\"!";
        return LastChar;
    }
}

