const seats = document.getElementsByClassName('addbtn');
let clickCount = 0;

for (const seat of seats) {
    seat.addEventListener('click', function() {
        if (clickCount < 4 && seat.style.backgroundColor !== 'green') {
          
            clickCount++;
            const seatLeft = getElementText('seat-left') - 1;
            setInnerText('seat-left', seatLeft);
            // background change
           seat.style.backgroundColor = 'green';
        //   seat count
            setInnerText('seat-count', clickCount);
        // seat id
        const seatName = event.target.parentNode.childNodes[0].innerText;
       const price = getInnerText('ticket-price');
    //   create element
        const selectContainer = document.getElementById('t-body');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = seatName;
        const td2 = document.createElement('td');
        td2.innerText = 'Economy';
        const td3 = document.createElement('td');
        td3.innerText = price;
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        selectContainer.appendChild(tr);

        //  totalcost
        totalCost('total-cost', price)
     
      
    //   grand total

    grandCost('grand-total', price)


        } else if (seat.style.backgroundColor === 'green') {
            clickCount = clickCount;
            seat.style.backgroundColor = 'green';
            setInnerText('seat-count', clickCount);
        }
    });
}

//  



const applyInput=document.getElementById('cupon-form');
const applyBtn=document.getElementById("apply-cupon");
applyInput.addEventListener("click",function(){
    const totalPriceElement = document.getElementById('total-cost');
    const  totalPrice = parseFloat(totalPriceElement.innerText);
    if(totalPrice  === 2200){
        applyInput.removeAttribute("readonly");
        
    }
    else{
        alert("You need to buy atleast 4 tickets to apply any coupne.");
    }
});

applyInput.addEventListener("change",function(){
    const cuponCode = document.getElementById("cupon-form").value;
        if(cuponCode === "NEW15" || cuponCode === "Couple 20"){
          applyBtn.classList.remove("btn-disabled");
        }
        
        else{
            applyInput.value="";
            alert("Invalid Coupne Code");
        }
});

applyBtn.addEventListener("click",function(){
    const cuponCode = document.getElementById("cupon-form").value;
    
    if(cuponCode=="NEW15"){
        firstCoupne();
       
    }
    else if(cuponCode=="Couple 20"){
        secondCoupne();
    }
    else{
        alert("Invalid Coupne Code");
    }
    document.getElementById("cupon-form").classList.add("hidden");
    applyBtn.classList.add("hidden");
    applyInput.value="";
    applyBtn.classList.add("btn-disabled");
});


function firstCoupne(){
    const totalPriceElement = document.getElementById('total-cost');
    const  totalPrice = parseFloat(totalPriceElement.innerText);  
    const discountAmount = totalPrice * 0.15;
    const grandTotal = document.getElementById('grand-total')
    grandTotal.innerText = totalPrice - discountAmount.toFixed(2);
    document.getElementById('cupon-form').value = " ";
    applyInput.value="";
}


function secondCoupne(){
    const totalPriceElement = document.getElementById('total-cost');
    const  totalPrice = parseFloat(totalPriceElement.innerText);  
    const discountAmount = totalPrice * 0.20;
    const grandTotal = document.getElementById('grand-total')
    grandTotal.innerText = totalPrice - discountAmount.toFixed(2);
    document.getElementById('cupon-form').value = " ";
    applyInput.value="";
}
// form and tickets validation
const btn = document.getElementById('myButton');
const emailinput = document.getElementById('email');
const numberinput = document.getElementById('number');
const nameinput = document.getElementById('name');
const modal = document.getElementById('continue');


emailinput.addEventListener("change", function() {
    const email = emailinput.value.trim();
    const number = numberinput.value.trim();
    const name = nameinput.value.trim();

    const totalPriceElement = document.getElementById('total-cost');
    const  totalPrice = parseFloat(totalPriceElement.innerText);
   
    if((email !== " " && number !== " "  && name !== " ") && totalPrice > 0){
        btn.classList.remove("btn-disabled")
    }
   
    else{
        alert("Please fill all the required fields and make sure the total cost is greater than zero. ")
        
        btn.classList.add("btn-disabled")
       
        numberinput.value="";
        nameinput.value="";
        emailinput.value="";
       
    }
 
  
   
    
});
modal.addEventListener("click",function(){
    numberinput.value="";
    nameinput.value="";
    emailinput.value="";
    setInnerText('total-cost', 0);
    setInnerText('grand-total', 0);
    btn.classList.add("btn-disabled");
   
});




function getElementText(elementId){
    const element = document.getElementById(elementId)
const text = element.innerText;
return text
}
function getInnerText(elementId){
    const currentElement = document.getElementById(elementId);
    const elementText = currentElement.innerText;
    const element = parseInt(elementText);
    return element;
}

function setInnerText(elementid, value){
    const element = document.getElementById(elementid);
    element.innerText = value;
}
function totalCost(id, value){
    const convertedTotalcost = getInnerText(id);
    sum = convertedTotalcost + value ;
  setInnerText('total-cost', sum);
}
function grandCost(id, value){
    const convertedTotalcost = getInnerText(id);
    sum = convertedTotalcost + value ;
    setInnerText('grand-total', sum);
}
function removeClassId(remove) {
    const element = document.getElementById(remove);
    element.classList.remove('btn-disabled');
}
function hide(){
    const hideSection = document.getElementById('close');
    hideSection.classList.add('hidden');

}

