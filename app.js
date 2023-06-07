let inputField = document.getElementById("answer");

let calculate = (number)=>{
inputField.value += number;
}


let result = ()=>{
try{
    inputField.value=eval(inputField.value)
}

catch(err){
    alert("Enter valid result")
}

}



let clear = document.getElementById("clear");

clear.addEventListener("click", ()=>{
  inputField.value = "";
})