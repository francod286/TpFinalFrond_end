`<h3>Mini Cooper S</h3>
<img class="auto-imagen" src="/imagenes/cooper.png"
    alt="Mini Cooper S" >
<br>
<a class="Caracteristicas" href="/paginas/Caracteristicas.html">Caracteristicas</a>
<br>
<br>
<br>`

var h3_texto = ["Bmw 323I Serie 3","Mini Cooper S","Chevrolet Cruce 2015"];
var img_src = ["https://cdn.pixabay.com/photo/2020/07/09/09/29/bmw-5386508_960_720.png","/imagenes/cooper.png","/imagenes/chevy_cruce.png"];
var img_alt = ["Bmw 323I Limusina Vintage","Mini Cooper S","Chevrolet Cruce 2015"];
var dirCarac = "/paginas/Caracteristicas.html";
var salto_linea = "<br>";



var texto_html = "";
var existe = true;

for (let i = 0; i < 3; i++) {
    texto_html = texto_html + `
    <h3> ${h3_texto[i]}</h3>
    <img class="auto-imagen" src="${img_src[i]}"
    alt="${img_alt[i]}" >
    ${salto_linea}
    <a class="Caracteristicas" href="${dirCarac}">Caracteristicas</a>
    ${salto_linea}
    ${salto_linea}
    ${salto_linea}
    `;

}

document.getElementById("box1").innerHTML = texto_html;