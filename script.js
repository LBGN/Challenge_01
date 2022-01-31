var inputIzquierda = document.querySelector("#input-texto");
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var inputDerecha = document.querySelector("#msg");
var botonCopiar = document.querySelector("#btn-copy");

botonEncriptar.addEventListener("click",function(){
	event.preventDefault();
	var mensaje = inputIzquierda.value;
	inputDerecha.value = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
	inputIzquierda.value = "";
});

botonDesencriptar.addEventListener("click",function(){
	event.preventDefault();
	var mensaje = inputIzquierda.value;
	inputDerecha.value = mensaje.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
	inputIzquierda.value = "";
})

botonCopiar.addEventListener("click", function () {
	event.preventDefault();
	var copyText = inputDerecha;
	navigator.clipboard.writeText(copyText.value);
	copyText.value ="";
});



/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/