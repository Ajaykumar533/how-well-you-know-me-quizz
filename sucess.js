
document.getElementById("000").onclick = function(){
if(a.checked && b.checked || c.checked && a.checked || a.checked && d.checked ||
        e.checked && f.checked || e.checked && g.checked || e.checked && h.checked ||
        i.checked && j.checked || i.checked && k.checked || i.checked && l.checked ||
        b.checked && c.checked || b.checked && d.checked || c.checked && d.checked ||
        f.checked && g.checked || f.checked && h.checked || g.checked && h.checked ||
        j.checked && k.checked || j.checked && l.checked || k.checked && l.checked  ){
        window.alert("only one option can be choosen")
 }
else{
    
   if(a.checked){
     console.log("it is checked")
     window.alert("Answer for the first question is wrong")
   }
   else if(b.checked){
        console.log("it is checked")
        window.alert("Answer for the first question is wrong")
    }
    else if(c.checked){
        console.log("it is checked")
        window.alert("Answer for the first question is correct")
    }

    else if(d.checked){
    console.log("it is checked")
    window.alert("Answer for the first question is wrong")
    }

    
    if(e.checked){
        console.log("it is checked")
        window.alert("Answer for the second question is wrong")  
    }
    else if(f.checked){
        console.log("it is checked")
        window.alert("Answer for the second question is correct")
    }
    else if(g.checked){
        console.log("it is checked")
        window.alert("Answer for the second question is wrong")
    }

    else if(h.checked){
    console.log("it is checked")
    window.alert("Answer for the second question is wrong")
    }


    
    if(i.checked){
        console.log("it is checked")
        window.alert("Answer for the third question is wrong")  
    }
    else if(j.checked){
        console.log("it is checked")
        window.alert("Answer for the third question is correct")
    }
    else if(k.checked){
        console.log("it is checked")
        window.alert("Answer for the third question is wrong")
    }

    else if(l.checked){
    console.log("it is checked")
    window.alert("Answer for the third question is wrong")
    
    }
  }
}




var button = document.getElementById("010");
button.addEventListener("click",function(){
location.href="http://127.0.0.1:5500/tq.html";
});