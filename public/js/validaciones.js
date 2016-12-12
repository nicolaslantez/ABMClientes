window.onload = function() {
var opcionesDias = "<option selected disabled></option>";
for(var i=1;i<=31;i++){
	opcionesDias += "<option>"+ i +"</option>";
}
document.getElementById("dia").innerHTML = opcionesDias;
var opcionesMes = "<option selected disabled></option>";
for(var j=1;j<=12;j++){
	opcionesMes += "<option>"+ j +"</option>";
}
document.getElementById("mes").innerHTML = opcionesMes;
var start = 1900;
var end = new Date().getFullYear();
var opcionesAños = "<option selected disabled></option>";
for(var year = start ; year <=end; year++){
  opcionesAños += "<option>"+ year +"</option>";
}
document.getElementById("año").innerHTML = opcionesAños;
}