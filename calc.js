

function enter(inputs){
    document.getElementById("output").value+=inputs;
}

function calculate(){
    let output= document.getElementById("output").value;
    var result = eval(output);
    document.getElementById("output").value=result;
}

function clean(){
    document.getElementById('output').value = " ";
}