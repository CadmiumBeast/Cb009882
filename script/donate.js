const btnsub = document.getElementById("insub")
const name =document.getElementById("name")
const er1 = document.getElementById("error1")
const cardNum = document.getElementById("carDNum").value;
const er2 = document.getElementById("error2")

btnsub.addEventListener("submit", subcard);
function subcard(){
   if(name.value === '' || name.value == null){
        er1.innerText = "Input name"
   }
   if(cardNum == "" || cardNum.length <19){
    er2.innerText = `"Input Valid Card Number"`
}
   }    
        