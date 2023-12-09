var changement=document.getElementById("questions");

function changetextvalue ()
{
    var question= document.getElementById("questions").value ; 
    var reponsech= document.getElementById("reponse"); 
   
    if (question=="question")
        reponsech.value="posez une question";
    else if (question=="js")
        reponsech.value="js signifie javascript";
    else if (question=="css")
        reponsech.value="css signifie cascading style sheets";
    else if (question=="html")
        reponsech.value=" html signifie Hypertext Markup Language";

}
changement.addEventListener("change",changetextvalue);