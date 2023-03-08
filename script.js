let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ulEl")
const errorMessage = document.createElement("div")
const tabBtn = document.getElementById("save-btn")

const tabs = [
    {url: "https://www.google.com"}
]

const leadsLocal = JSON.parse(localStorage.getItem("myLeads"))

if (leadsLocal){
    myLeads = leadsLocal
    render(myLeads)
}


function render(leads) {
    let listItems = ""
    for (i = 0 ; i < leads.length ; i++){
        listItems += `
            <li>
                <a href="http://${leads[i]}" target="_blank"> 
                    ${leads[i]}
                </a>
            </li>
            `
    }    
    
    ulEl.innerHTML = listItems

}

tabBtn.addEventListener("click", function(){
    console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    errorMessage.remove()
})


inputEl.placeholder = "Enter text"

clearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    errorMessage.classList.add("clear-message")
    errorMessage.classList.remove("error-message")
    errorMessage.textContent = "Leads cleared"
    inputEl.after(errorMessage)
    inputEl.value = ""
    inputEl.focus({ focusVisible: true });
})

inputBtn.addEventListener("click", function(){
    
    if (inputEl.value ===""){
        
        
        errorMessage.classList.add("error-message")
        errorMessage.classList.remove("clear-message")
        errorMessage.textContent = "Please try again"
        inputEl.after(errorMessage)
        inputEl.classList.add("error")
        inputEl.focus({ focusVisible: true });
        
    }else{
        
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
    errorMessage.textContent = ""
    errorMessage.remove()
    inputEl.classList.remove("error")
    render(myLeads)
    inputEl.focus({ focusVisible: true });

    
   }     
})

function clearInput(){
    if (inputEl.value != ""){
        inputEl.value = "";
    }
}



