document.getElementById('temas').addEventListener("change",temaSeleccionado);
//función para inicializar variables, limpiar articulos y mostrar cajas
function temaSeleccionado(){
    document.getElementById("numcaj").value=null;
    document.getElementById("colorcaj").value=null;
    //getElementbyTagName convierte en arreglo porque guarda más de un elemento
    capas=document.getElementsByTagName("article");
    //ocultar varios elementos
    for(i=0; i<capas.length;i++){
        capas[i].style.display="none";
    }
    //almacenar el dato de la opción del usuario
    var articulo=document.getElementById("temas").value;
    if(articulo!=null){
        document.getElementById("bienv").style.display="none";
        document.getElementById("mostrarresultados").style.display="none";
    }
    document.getElementById(articulo).style.display="block";
}
function mostrarCajas(){
    var numcajas=parseInt(document.getElementById("numcaj").value);
    var colorcaj=document.getElementById("colorcaj").value;
    var tipoborde=document.getElementById("tipoborde").value
    for(i=0; i<numcajas; i++){
        var mostrar= document.getElementById("mostrarcajas")
        var caj=document.createElement("div");
        caj.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp";
        caj.style.display="inline-block";
        caj.style.margin="8px 8px";
        switch (colorcaj){
            case 'ro': caj.style.backgroundColor='red';
                break;
            case 'az': caj.style.backgroundColor='blue';
                break;
            case 'am': caj.style.backgroundColor='yellow';
                break;
            case 've': caj.style.backgroundColor='green';
                break;   
            case 'vi': caj.style.backgroundColor='violet';
                break;
        }
        switch (tipoborde){
            case 'so': caj.style.border='solid';
                break;
            case 'pu': caj.style.border='dotted';
                break;
            case 'li': caj.style.border='dashed';
                break;
            case 'do': caj.style.border='double';
                break;
        }
        mostrar.appendChild(caj);
    }
}
function mostrarResultados(){
    document.getElementById("preguntas_encuesta").style.display="none";
    document.getElementById("mostrarresultados").style.display="block";
    document.getElementById("titulo_resp").innerHTML="Aquí se muestran tus respuestas<br>";
    var preg_1="1)¿Qué tipo de videojuegos prefiere?";
    var resp_1=document.getElementById("resp_1").value;
    var preg_2="2)¿Cuántas horas a la semana juega videojuegos?";
    var resp_2=document.getElementById("resp_2").value;
    var preg_3="3)¿Qué sistema de videojuegos prefiere?";
    var resp_3=document.getElementById("resp_3").value;
    var preg_4="4)¿Con quién prefiere jugar videojuegos?";
    var resp_4=document.getElementById("resp_4").value;
    var preg_5="5)¿Cuánto dinero gasta al mes en videojuegos?";
    var resp_5=document.getElementById("resp_5").value;
    document.getElementById("pr1").innerHTML=preg_1+"<br>"+resp_1;
    document.getElementById("pr2").innerHTML=preg_2+"<br>"+resp_2;
    document.getElementById("pr3").innerHTML=preg_3+"<br>"+resp_3;
    document.getElementById("pr4").innerHTML=preg_4+"<br>"+resp_4;
    document.getElementById("pr5").innerHTML=preg_5+"<br>"+resp_5;


    /*var preg_1=document.getElementById("preg_1");
    var resp_1=document.getElementById("resp1").value;
    var preg_2=document.getElementById("preg_2");
    var resp_2=document.getElementById("resp2").value;
    var preg_3=document.getElementById("preg_3");
    var resp_3=document.getElementById("resp3").value;
    var preg_4=document.getElementById("preg_4");
    var resp_4=document.getElementById("resp4").value;
    var preg_5=document.getElementById("preg_5");
    var resp_5=document.getElementById("resp5").value;
    var mostrar1=preg_1+" <br> "+resp_1;
    var mostrar2=preg_2+" <br> "+resp_2;
    var mostrar3=preg_3+" <br> "+resp_3;
    var mostrar4=preg_4+" <br> "+resp_4;
    var mostrar5=preg_5+" <br> "+resp_5;
    var mostrarPyR_1=document.getElementById("pr1");
    var mostrarPyR_2=document.getElementById("pr2");
    var mostrarPyR_3=document.getElementById("pr3");
    var mostrarPyR_4=document.getElementById("pr4");
    var mostrarPyR_5=document.getElementById("pr5");
    
    document.getElementById("titulo_resp").innerHTML="Aquí se muestran tus respuestas";
    //document.getElementById("").innerHTML=mostrar1;
    alert(resp_1);
    mostrarPyR_1.appendChild(mostrar1);
    mostrarPyR_2.appendChild(mostrar2);
    mostrarPyR_3.appendChild(mostrar3);
    mostrarPyR_4.appendChild(mostrar4);
    mostrarPyR_5.appendChild(mostrar5);*/
}