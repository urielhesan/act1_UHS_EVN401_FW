document.getElementById('temas').addEventListener("change",temaSeleccionado);
function temaSeleccionado(){
    document.getElementById("numcaj").value=null;
    document.getElementById("colorcaj").value=null;
    capas=document.getElementsByTagName("article");
    for(i=0; i<capas.length;i++){
        capas[i].style.display="none";
    }
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
}

/*document.getElementById('NumMesas').addEventListener("change",function(){mesas();});

function mesas(){
    var nm=parseInt(document.getElementById("NumMesas").value);
    var texto="";
    for(i=0; i<nm; i++){
        texto+="Mesa "+(i+1)+" Adultos: <select id='adulto"+(i+1)+"' name='adulto"+(i+1)+"' onChange='num_adultos()'";
        texto+="<option value='0'>0</option>"
        texto+="<option value='1'>1</option>";
        texto+="<option value='2'>2</option>";
        texto+="<option value='3'>3</option>";
        texto+="<option value='4'>4</option></select>";

        texto+="Mesa "+(i+1)+" Menores: <select id='menor"+(i+1)+"' name='menor"+(i+1)+"' onChange='num_menores()'";
        texto+="<option value='0'>0</option>";
        texto+="<option value='1'>1</option>";
        texto+="<option value='2'>2</option>";
        texto+="<option value='3'>3</option>
        texto+="<option value='4'>4</option></select>";
        
        texto+="<div style='margin-top:10px; display:none;' id='edades"+(i+1)+"'></div>";
        texto+="<hr/ style='width:450px;'>";
    }
    document.getElementById("mesas").innerHTML=texto;
}
function num_adultos(adultos){
    document.getElementById("edades"+(adultos)).style.display = "block";

    var y=document.getElementById("adulto"+adultos).value;
    var lista=document.getElementById("menor"+adultos);
    lista.length=(4-y)+1;
    y=lista.length;
    for(i=0;i<=y;i++){
        lista.options[i].value=i;
        lista.options[i].text=i;
    }
}
function num_menores(menores){
    document.getElementById("edades"+(menores)).style.display ="block";
    var z= document.getElementById("menor"+menores).value;
    var texto2="Edades: ";
    for(i=0;i<z;i++){
        texto2+="menor "+(i+1)+":<input type='text' id='edad"+menores+""+(i+1)+"' name='edad"+menores+"_"+(i+1)+"' size='5'>";
    }
    document.getElementById("edades"+menores).innerHTML=texto2;
}*/

document.getElementById('reservacion').addEventListener("change",function(){mesas();});
document.getElementById('mostrar').addEventListener("click",function(){mostrar();});

let mesas=function(){
    let nm=document.getElementById('reservacion').value;
    let contenido='';
    for(i=0; i<nm; i++){
        contenido+='<h3>mesa: '+(i+1)+'</h3>'+
        '<h4>Número de comensales</h4>'+
        'Adultos: <input type="text" name="adultos" id="adultos'+i+'"/><br>'+
        'Menores: <input type="text" name="menores" id="menores'+i+'"/><br><hr>';
    }
    document.getElementById("mesas").innerHTML=contenido;
}

let mostrar=function(){
    let mesas=document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa',mesas);
    let cAdultos=document.getElementsByName("adultos");
    let vAdultos=[];
    for (let i=0; i<cAdultos.length; i++){
        vAdultos[i]=cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }
    let cMenores=document.getElementsByName("menores");
    let vMenores=[];
    for (let i=0; i<cMenores.length; i++){
        vMenores[i]=cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }
    window.open("DatosReservacion.html");
}