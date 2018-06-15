'use strict';
//podpinam pojemnik do wyświetlania informacji.
var output = document.getElementById('greeter-output');
//podpinam przycisk do wprowadzania danych.
var button = document.getElementById('greeter-button');
var buttonBlue = document.getElementById('blue-button');
var buttonReset = document.getElementById('reset-button');
//definiuje zmienne.
var stopnieC;
var stopnieF;

// Temperatura w C.
function calculateTempF() {
    if (!stopnieC || isNaN(stopnieC)) {
        return newLine('Podaj mi liczbę!');
    }
    var tempInCel;
    tempInCel = Math.round(stopnieC * 1.8 + 32);
    newLine(('Jest: ' + stopnieC + ' C i ' + tempInCel + ' F.<br>' + stanwody(stopnieC)));
}
// Temperatura w F.
function calculateTempC() {
    if (!stopnieF || isNaN(stopnieF)) {
        return newLine('Podaj mi liczbę!');
    }
    var tempInFar;
    tempInFar = Math.round(stopnieF / 1.8 - 32);
    newLine(('Jest: ' + stopnieF + ' F i ' + tempInFar + ' C.<br>' + stanwody(tempInFar)));
}
// Stan wody.
var stanwody = function (stopnieC) {
    if (stopnieC < 0) {
        return ('Woda jest zamarznięta.')
    } else if (stopnieC >= 0 && stopnieC < 100) {
        return ('Woda jest w stanie ciekłym.')
    } else if (stopnieC >= 100) {
        return ('Woda jest w stanie wrzenia.')
    }
}

var newLine = function (text) {
    /*output.innerHTML += (text + '<br><br>'); 
        // Wyświetla treść w nowej lini nie nadpisując starego.
    */
    output.innerHTML = (text + '<br><br>'); // Wyświetla treść w nowej lini nadpisując poprzednika.
}

button.addEventListener('click', function () {
    stopnieC = parseInt(window.prompt('Ile jest stopni Celsjusza?'));
    calculateTempF();
});

buttonBlue = document.getElementById('blue-button');
buttonBlue.addEventListener('click', function () {
    stopnieF = parseInt(window.prompt('Ile jest stopni Faranhait?'));
    calculateTempC();
});

buttonReset = document.getElementById('reset-button');
buttonReset.addEventListener('click', function () {
    output.innerHTML = "";
});