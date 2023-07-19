
function dibujarLinea(color, xinicial,ynicial, xfinal, yfinal)
{
    lienzo.beginPath(); //arrancar un trazo
    lienzo.strokeStyle = color; //color de la linea
    lienzo.moveTo(xinicial,ynicial); // mover el lapiz x
    lienzo.lineTo(xfinal,yfinal); 
    lienzo.stroke();
    lienzo.closePath();
}

var d = document.getElementById("dibujito"); //metodo que me trau un elemento a través del id
var lienzo = d.getContext("2d");

dibujarLinea("pink",10,300,200,10);