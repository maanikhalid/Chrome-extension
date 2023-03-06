let myLeads = ["www.google.com","www.yahoo.com", "www.msn.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ulEl")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    
})

for (i = 0 ; i < myLeads.length ; i++){
   
    const myLeadsItem = document.createElement("li")
    myLeadsItem.textContent = myLeads[i]
    ulEl.appendChild(myLeadsItem)
}

