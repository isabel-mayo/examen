function operacion(){

    var num1= parseInt(document.getElementById("input1").value);
    var num2= parseInt(document.getElementById("input2").value);
    var cantidad=parseInt(document.getElementById("cantidad").value);
    
    var radios=document.getElementsByName('cuenta');
    var radioset;
    
    for(i=0; i < radios.length;i++){
        if(radios[i].checked){
            radioset=radios[i].value;
            
        }
    
    }
    
    var resultado;
        if(radioset=="resta"){
            resultado= num1;
            
        }
        else{
            resultado= num1;
        }
        document.getElementById("cantidad").value= "Se han retirado " + num1;

        if(radioset=="suma"){
            resultado= num2;
            
        }
        else{
            resultado= num2;
        }


        document.getElementById("cantidad").value= "Se han ingresado " + num2;
    }
    