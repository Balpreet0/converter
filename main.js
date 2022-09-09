function CONVERT() {

    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms * factor;

    document.getElementById('res').innerText = miles + 'MILES';



}



function CONVERTS() {


    var kms = document.getElementById('tata').value;
    const factor = 1000;
    var METERS = kms * factor;

    document.getElementById('res2').innerText = METERS + 'METERS';



}

function convert3(){



var c= document.getElementById('bata').value;
var f= c*1.8+32;

document.getElementById('res3').innerText=f +'farheniet';






}