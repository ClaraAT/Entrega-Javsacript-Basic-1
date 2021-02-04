//Exercici 1
var myFirst = "Hello World!" ;

//Exercici 2
//alert("Hi,my name is Clara :)");

//Exercici 3
var firstName = "Clara";
var lastName = "Aler";

console.log(myFirst);
document.write(firstName +" "+lastName);

//Exercici 4
var x = 56;
var y = 87; 
document.write("<br>"+"La suma entre "+ x +" y "+ y + " es " +(x+y));

//Exercici 5
/* 
var nota_examen = prompt ("Please input your note");

if (nota_examen > 5 && 10 >= nota_examen){
    alert ("Felicidades, ¡has aprobado con un "+ nota_examen + "!");
} else if (nota_examen < 5){
    alert ("Lástima, has suspendido con un "+ nota_examen);
} else {
    alert("Valor incorrecto");
}
*/

//Exercici 6
var text ="Tinc un cotxe de color verd";
document.write("<br>"+ text);
text = text.replace('verd','blau');
document.write("<br>"+ text);
text = text.replace(/o/g, "u");
document.write("<br>"+ text);

//Ecercici 7
var mobles = ['taula', 'cadira', 'ordinador', 'libreta'];

for (i=0; i< mobles.length; i++){
    document.write("<br>"+ "L'objecte "+ mobles[i] + " està en " +i+ " posició")
}