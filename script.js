//Function for Entering Numbers
function displaynum(number){
   result.value += number; 
}

//function for operation
function evaluvate(){
    var calc=result.value;
    var val=eval(calc);
    result.value=val;
}

//function for clearing
function cancel(){
    result.value= result.value.slice(0,-1);
}

//function All Clear
function clearNum(){
    result.value='';
}