
function check(){

    let input = document.getElementById("inputColor")
    let color = input.value
    let lowerColorName = color.toLowerCase();

    if (lowerColorName == "grün") {
        alert("Bitte losfahren!");
    } else if (lowerColorName == "gelb") {
        alert("Vorsicht!");
    } else if (lowerColorName == "rot") {
        alert("Anhalten!");
    } else {
        alert("Keine gültige Farbe");
    }

}