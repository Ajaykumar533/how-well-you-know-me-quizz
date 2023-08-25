var x


document.getElementById("btn13").onclick = function(){
    if(check1.checked && check2.checked || check3.checked && check1.checked || check1.checked && check.checked ||
        check4.checked && check5.checked || check4.checked && check6.checked || check4.checked && check7.checked ||
        check8.checked && check9.checked || check8.checked && check10.checked || check8.checked && check10.checked ||
        check2.checked && check3.checked || check2.checked && check.checked || check3.checked && check.checked ||
        check5.checked && check6.checked || check5.checked && check7.checked || check6.checked && check7.checked ||
        check9.checked && check10.checked || check9.checked && check11.checked || check10.checked && check11.checked 
        ){
        window.alert("only one option can be choosen")
    }
   else{
    
    if(check1.checked){
        console.log("it is checked")
        window.alert("Answer for the first question is wrong")
    }
    else if(check2.checked){
        console.log("it is checked")
        window.alert("Answer for the first question is wrong")
    }
    else if(check3.checked){
        console.log("it is checked")
        window.alert("Answer for the first question is wrong")
    }

    else if(check.checked){
    console.log("it is checked")
    window.alert("Answer for the first question is correct")
    }







    
    if(check4.checked){
        console.log("it is checked")
        window.alert("Answer for the second question is wrong")  
    }
    else if(check5.checked){
        console.log("it is checked")
        window.alert("Answer for the second question is wrong")
    }
    else if(check6.checked){
        console.log("it is checked")
        window.alert("Answer for the second question is wrong")
    }

    else if(check7.checked){
    console.log("it is checked")
    window.alert("Answer for the second question is correct")
    }




    
    if(check8.checked){
        console.log("it is checked")
        window.alert("Answer for the third question is wrong")  
    }
    else if(check9.checked){
        console.log("it is checked")
        window.alert("Answer for the third question is wrong")
    }
    else if(check10.checked){
        console.log("it is checked")
        window.alert("Answer for the third question is wrong")
    }

    else if(check11.checked){
    console.log("it is checked")
    window.alert("Answer for the third question is correct")
    
    }
  }
}


var button = document.getElementById("12");
button.addEventListener("click", function() {
    // Redirect to the desired HTML page
    location.href = "http://127.0.0.1:5500/success.html";
});
