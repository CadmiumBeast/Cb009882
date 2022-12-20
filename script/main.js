//Global Variables
let currentCost = 0;
let overallCost = 0;
let durCost = 0;
let fulCost = 0;
let tsla = 0;
let tslc = 0;
let tfa = 0;
let tfc = 0;
let tin = 0;
let tex = 0;

//calling from DOM
const SlAd =  document.getElementById("slAd");
const SlCh = document.getElementById("slCH");
const FoAd = document.getElementById("foAd");
const FoCh = document.getElementById("foCH");
const InF = document.getElementById("iNf");
const durAtion = document.getElementById("duRation");
const txtcost = document.getElementById("cost");
const date = document.getElementById("date");
const fName = document.getElementById("fullName");
const mobNum = document.getElementById("mobNum");
const eMail = document.getElementById("eMail");
const conEmail = document.getElementById("conEmail");
const genDer = document.getElementById("genDer");
const btnaddOrder = document.getElementById("addOrder");
const btnplaOrder = document.getElementById("placeOrder");
const btnInc = document.getElementById("increment");
const btnDec = document.getElementById("decrement");
const btnInc1 = document.getElementById("increment1");
const btnDec1 = document.getElementById("decrement1");
const btnInc2 = document.getElementById("increment2");
const btnDec2 = document.getElementById("decrement2");
const btnInc3 = document.getElementById("increment3");
const btnDec3 = document.getElementById("decrement3");
const btnInc4 = document.getElementById("increment4");
const btnDec4 = document.getElementById("decrement4");
const ctnOrd = document.getElementById("currentOrder");
const ovrAll = document.getElementById("overallOrder");
const txtTC = document.getElementById("totalCost");
const btnadf = document.getElementById("favOrite");
const btnOrf = document.getElementById("calFav");
const btnloy = document.getElementById("loyalty");
const txtloy = document.getElementById("outloy");


//Incrmenting and Decrmenting of Number of people
btnInc.addEventListener("click", SlaI);
function SlaI(){
    let value = SlAd.getAttribute("value");
    let newValue = parseInt(value);
   let a = newValue + 1;
   SlAd.setAttribute("value",a);  
   currentCost += 1200 ;
   txtcost.innerText = `LKR.${currentCost}`;

}
btnDec.addEventListener("click", SLaD);
function SLaD(){
    let value = SlAd.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)SlAd.setAttribute("value",a);
    
    currentCost -= 1200;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnInc1.addEventListener("click", SlcI);
function SlcI(){
    let value = SlCh.getAttribute("value");
    let newValue = parseInt(value);
   let a = newValue + 1;
   SlCh.setAttribute("value",a);
   
   currentCost += 700;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnDec1.addEventListener("click", SLcD);
function SLcD(){
    let value = SlCh.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)SlCh.setAttribute("value",a);
    
    currentCost -= 700;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnInc2.addEventListener("click", FoaI);
function FoaI(){
    let value = FoAd.getAttribute("value");
    let newValue = parseInt(value);
   let a = newValue + 1;
   FoAd.setAttribute("value",a);
   
   currentCost += 5500;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnDec2.addEventListener("click", FoaD);
function FoaD(){
    let value = FoAd.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)FoAd.setAttribute("value",a);
    
    currentCost -= 5500;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnInc3.addEventListener("click", FocI);
function FocI(){
    let value = FoCh.getAttribute("value");
    let newValue = parseInt(value);
   let a = newValue + 1;
   FoCh.setAttribute("value",a);
   
   currentCost += 2700;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnDec3.addEventListener("click", FocD);
function FocD(){
    let value = FoCh.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)FoCh.setAttribute("value",a);
    
    currentCost -= 2700;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnInc4.addEventListener("click", infI);
function infI(){
    let value = InF.getAttribute("value");
    let newValue = parseInt(value);
   let a = newValue + 1;
   InF.setAttribute("value",a);
   
   currentCost += 0;
   txtcost.innerText = `LKR.${currentCost}`;
}
btnDec4.addEventListener("click", infD);
function infD(){
    let value = InF.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if(a >=0)InF.setAttribute("value",a);
    
    currentCost -= 0;
   txtcost.innerText = `LKR.${currentCost}`;
}
//Change of Duration
durAtion.addEventListener("change", Durval);
function Durval(){
    let a = durAtion.value;
    let slAV = parseInt(SlAd.value);
    let slCV = parseInt(SlCh.value);
    let foAV = parseInt(FoAd.value);
    let foCV = parseInt(FoCh.value);
    if(a == "Half Day"){
        durCost = (slAV*350)+(slCV*350)+(foAV*450)+(foCV*450);
        fulCost = currentCost + durCost;
        txtcost.innerText =`LKR. ${fulCost}`;
    }else if(a == "Full Day"){
        durCost = (slAV*600)+(slCV*600)+(foAV*800)+(foCV*800);
        fulCost = currentCost + durCost;
        txtcost.innerText =`LKR. ${fulCost}`;
    }else txtcost.innerText = `LKR. ${currentCost}`;
    
    
}
//Showing order
btnaddOrder.addEventListener("click", shwOdr)
function shwOdr(){
    let fuName = fName.value;
    let slAV = parseInt(SlAd.value);
    let slCV = parseInt(SlCh.value);
    let foAV = parseInt(FoAd.value);
    let foCV = parseInt(FoCh.value);
    let infV = parseInt(InF.value);
    let totalEx = (slAV+slCV+foAV+foCV+infV);
    let Emil = eMail.value;
    let Mob = mobNum.value;
    let total  = txtcost.innerText ;
    let arda = date.value;
    overallCost += (currentCost + durCost);
    tsla += slAV;
    tslc += slCV;
    tfa += foAV;
    tfc += foCV;
    tin += infV;
    tex += totalEx
    ovrAll.innerHTML = `
    <div id="orderDe">
    <p>
    Booking Name: ${fuName}<br>
    Number Of People: ${tex}<br>
    SL Adult: ${tsla}<br>
    SL Child: ${tslc}<br>
    Foriegn Adult: ${tfa}<br>
    Foriegn Child: ${tfc}<br>
    Infants: ${tin}<br>
    Total: ${total}<br>
    Arrival Date: ${arda}<br>
    Email: ${Emil}<br>
    Contact No: ${Mob}<br>-
    </p>
    </div>
    `
    txtTC.innerText = `LKR. ${overallCost}`;
    reset();
}
function reset(){
    SlAd.setAttribute("value",0);
    SlCh.setAttribute("value",0);
    FoAd.setAttribute("value", 0)
    FoCh.setAttribute("Value",0);
    InF.setAttribute("value",0);
    txtcost.innerText = "LKR. 0";
    currentCost = 0;
    fulCost = 0;
    durCost = 0;
}
btnadf.addEventListener("click", adFav);
function adFav(){
    delt();
    let a = SlAd.getAttribute("value");
    let b = SlCh.getAttribute("value");
    let c = FoAd.getAttribute("value"); 
    let d = FoCh.getAttribute("value");
    let e = InF.getAttribute("value");

    localStorage.setItem("Sl Adult", a)
    localStorage.setItem("Sl Child", b)
    localStorage.setItem("Foriegn Adult", c)
    localStorage.setItem("Foriegn Child", d)
    localStorage.setItem("Infant", e)

}
function delt(){
    localStorage.clear
}
btnOrf.addEventListener("click", ordFav);
function ordFav(){
    let a = localStorage.getItem("Sl Adult");
    let b = localStorage.getItem("Sl Child");
    let c = localStorage.getItem("Foriegn Adult");
    let d = localStorage.getItem("Foriegn Child");
    let e = localStorage.getItem("Infant");
    let aa = parseInt(a);
    let bb = parseInt(b);
    let cc = parseInt(c);
    let dd = parseInt(d);
    let ee = parseInt(e);

    currentCost = (aa*1200)+(bb*700)+(cc*5500)+(dd*2700)+(ee*0);

    SlAd.setAttribute("value",a);
    SlCh.setAttribute("value",b);
    FoAd.setAttribute("value",c);
    FoCh.setAttribute("value",d);
    InF.setAttribute("value",e);
    txtcost.innerText = `LKR. ${currentCost}`
}
btnplaOrder.addEventListener("click", plaOrd);
function plaOrd(){
    alert("Thank you for Booking! \nWish to meet you soon!")
    fName.value = "";
    date.value = "";
    mobNum.value = "";
    eMail.value = "";
    conEmail.value = "";
    SlAd.value = 0;
    SlCh.value = 0;
    FoAd.value = 0;
    FoCh.value = 0;
    currentCost = 0;
    fulCost = 0;
    durCost = 0;
    txtcost.innerText = "0.00"
    ovrAll.innerText = ""
    txtTC.innerText = "0.00"
}
btnloy.addEventListener("click", addLoy);
function addLoy(){
    
    if(tex > 3){
       let loyaltypoints = tex*15
       txtloy.innerText = `Loyalty Earned: ${loyaltypoints} points`
    }else txtloy.innerText= `Loyalty Earned: 0 points`
}