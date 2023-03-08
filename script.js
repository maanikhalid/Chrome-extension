let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ulEl")
const errorMessage = document.createElement("div")



inputEl.placeholder = "Enter text"

inputBtn.addEventListener("click", function(){
    
    if (inputEl.value ===""){
        
        
        errorMessage.classList.add("error-message")
        errorMessage.textContent = "Please try again"
        inputEl.after(errorMessage)
        inputEl.classList.add("error")
        
    }else{
        
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    errorMessage.textContent = ""
    errorMessage.remove()
    inputEl.classList.remove("error")
    renderLeads()
   }     
})

function clearInput(){
    if (inputEl.value != ""){
        inputEl.value = "";
    }
}

function renderLeads () {
    let listItems = ""
    for (i = 0 ; i < myLeads.length ; i++){
        // listItems += "<li><a href='http://"+myLeads[i]+"' target='_blank'>" + myLeads[i] + "</a>" + "</li>"
        listItems += `
            <li>
                <a href="http://${myLeads[i]}" target="_blank"> 
                    ${myLeads[i]}
                </a>
            </li>
            `
    }

    ulEl.innerHTML = listItems
}


