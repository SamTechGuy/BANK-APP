let storage = []
// console.log(storage)

let submit = document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault()
    let amount = Number(document.getElementById("amount").value)
    let error = document.querySelector(".error")
    if(amount == 0){
        alert("You can't provide a blank deposition")
     }
    
     else{
    
    new_Amount = {
        amount : amount,
    }
        let check_Amount = JSON.parse(localStorage.getItem("Money_storage"))
        if(check_Amount == null){
            
            storage.push(new_Amount)
            localStorage.setItem("Money_storage", JSON.stringify(storage))  
        }else{
            let find_Amount = JSON.parse(localStorage.getItem("Money_storage"))
            if(find_Amount){
                find_Amount.push(new_Amount)
                localStorage.setItem("Money_storage", JSON.stringify(find_Amount))
            }
        }
    }
        location.reload()
})

let checker_Amount = JSON.parse(localStorage.getItem("Money_storage"))
console.log(checker_Amount)

checker_Amount.forEach((items)=>{
    console.log(items)

    let div = document.createElement("div")
    div.innerHTML = `
    <div style="display:flex; justify-content:space-between;">
    <span>Deposited</span><span>+${items.amount}</span>
    </div><hr>
    `
    document.getElementById("deposit_box").append(div)
})

function calc(){
    let total = JSON.parse(localStorage.getItem("Money_storage"))
    return total.reduce((acc, item, i)=>{

        return acc += item.amount
    },0)
}
console.log(calc())

let total = document.getElementById("display").textContent = calc()


let sub_Btn = document.getElementById("transaction_btn")
sub_Btn.addEventListener("click", (e)=>{
e.preventDefault()
let transact_input1 = document.getElementById("transact_input1").value 
let transact_input2 = Number(document.getElementById("transact_input2").value)
// let errors = document.getElementById("errors")
if(transact_input1 == 0 && transact_input2 == 0){
    alert("INVALID SYNTAX : To make a tranction you have to make a description and input an amount")
}else{
    let new_AmountMoney = {
        transact_input2 : transact_input2,
    }
    let storage_Account = JSON.parse(localStorage.getItem("Money_storage"))
    if(storage_Account != null){
        storage.push(new_AmountMoney)    
         
    }
}

})