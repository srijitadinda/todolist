const inputBOX=document.getElementById("input-box");
const listCONTAINER=document.getElementById("list-container");

function addJob(){
    if(inputBOX.value === ''){
        alert("You must write something!");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=inputBOX.value;
        listCONTAINER.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBOX.value="";
    saveDATA();
}
  listCONTAINER.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveDATA();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDATA();
    }
}, false);
  
function saveDATA(){
    localStorage.setItem("data",listCONTAINER.innerHTML);
}
function show(){
    listCONTAINER.innerHTML=localStorage.getItem("data");
}
show();