function afficher ()
{
    var contenu=document.getElementById("contenu").value;
    alert (contenu);
}

var x=document.getElementById("control");   
x.addEventListener("click",afficher)
