let a, c, d, f, g;
let  eingabe;

//let ergebnis1 = "a", ergebnis2 = "b", ergebnis3 = "c", ergebnis4 = "d", ergebnis5 = "e", ergebnis6 = "f", ergebnis7 = "g" , b, e

/*
eingabe = document.getElementById("tf1")
ausgabe = document.getElementById("tf2")
*/
function akkordeDzuC() {


    if (eingabe === d) {
        console.log("c")
        document.getElementById("tf2").value = "c"
    }
    else if (eingabe === a) {
        console.log("g")
        document.getElementById("tf2").value = "g"
    }
    else if(eingabe === g) {
        console.log("f")
        document.getElementById("tf2").value = "f"
    }
}

function akkordeCzuD() {


    if (eingabe === c) {
        console.log("d")
        document.getElementById("tf2").value = "d"
    }
    else if (eingabe === g) {
        console.log("a")
        document.getElementById("tf2").value = "a"
    }
    else if (eingabe === f) {
        console.log("g")
        document.getElementById("tf2").value = "g"
    }
}



