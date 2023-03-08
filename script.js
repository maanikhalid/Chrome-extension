let myLeads = []
let myLeadTabs = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ulEl")
const errorMessage = document.createElement("div")
const tabBtn = document.getElementById("save-btn")


// console.log(document.title)

     

const leadsLocal = JSON.parse(localStorage.getItem("myLeads"))
const leadsLocalTabs = JSON.parse(localStorage.getItem("myLeadTabs"))

if (leadsLocal && leadsLocalTabs){
    myLeads = leadsLocal
    myLeadTabs = leadsLocalTabs
    render(myLeads, myLeadTabs)
} 


function render(leads, leadTab) {

    let listItems = ""
    for (i = 0 ; i < leads.length ; i++){
        
        listItems += `
            <li id="${leadTab[i]}">
                <a href="${leads[i]}" target="_blank"> 
              ${leadTab[i]}
                </a>
            </li>
            `
    }    
    
    
    ulEl.innerHTML = listItems
  
}


tabBtn.addEventListener("click", function(){
    
   // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {})
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
        myLeads.push(tabs[0].url)
        myLeadTabs.push(tabs[0].title)
        
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        localStorage.setItem("myLeadTabs", JSON.stringify(myLeadTabs))
        
        render(myLeads, myLeadTabs)
        errorMessage.remove()
        
    })

})


inputEl.placeholder = "Enter text"

clearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    myLeadTabs = []
    render(myLeads, myLeadTabs)
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
     let urlCheckA = "www."
     let urlCheckB = "http://www."
     let urlCheckC = "https://www."

     
        if(inputEl.value.startsWith(urlCheckA))
        { 
          myLeads.push("http://"+inputEl.value)
        } else if(inputEl.value.startsWith(urlCheckB || urlCheckC)) {
          myLeads.push(inputEl.value)  
        } else { myLeads.push("http://www." + inputEl.value)}
    
    
    myLeadTabs.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    localStorage.setItem("myLeadTabs", JSON.stringify(myLeadTabs))
        
    errorMessage.textContent = ""
    errorMessage.remove()
    inputEl.classList.remove("error")
    render(myLeads, myLeadTabs)
    inputEl.focus({ focusVisible: true });

        
     
    
   }     
})

function clearInput(){
    if (inputEl.value != ""){
        inputEl.value = "";
    }
}



