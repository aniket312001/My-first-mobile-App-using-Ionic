const reasonInput =  document.querySelector('#reason')
const amountInput =  document.querySelector('#amount')
const cancelBtn =  document.querySelector('#cancel')
const confirmBtn =  document.querySelector('#confirm')
const list =  document.querySelector('#e-list')
const total =  document.querySelector('#total')
const alertCtrl = document.querySelector('ion-alert-controller')

let tot = 0
total.textContent = tot
const clear = ()=>{
    reasonInput.value = ""
    amountInput.value = ""
}


confirmBtn.addEventListener('click',()=>{
    const enterReason = reasonInput.value
    const enterAmount =amountInput.value

    if((enterReason.trim().length <= 0) || (enterAmount<=0) || (enterAmount.trim().length<= 0)) {
        console.log("Invalid ")
        // alertCtrl.create({message:'Please Enter a valid Input',header:"valid input",buttons:['Okay']})
    }
    else {
        console.log(enterReason,enterAmount)

        const newItem = document.createElement('ion-item')
        newItem.textContent = enterReason + ": $"+ enterAmount
    
        list.appendChild(newItem)
    
        tot +=parseInt(enterAmount)
        total.textContent = tot
    
        clear()
    }

   
})


cancelBtn.addEventListener('click',clear)

