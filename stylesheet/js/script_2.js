console.log("De quel nombre veux tu calculer la factorielle ?")
function show(){
    var i, no, fact;
    fact=1;
    no=Number(document.getElementById("num").value);
    for(i=1; i<=no; i++)  
    {
    fact= fact*i;
    }  
    document.getElementById("answer").value= fact;
    }
    console.log("le factorielle est:")