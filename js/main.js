window.addEventListener("load", initialize)

const updateSpeed = 30

function $(selectorString){
    var selector = selectorString.slice(0,1)
    var string = selectorString.slice(1)
    var element
    if(selector === "."){
        element = document.getElementsByClassName(string)
    }
    else{
        element = document.getElementById(string)
    }
    return element
}

function initialize(evt){
    var tabs = Array.prototype.slice.call($(".menu-tab"))
    var tabContainer = Array.prototype.slice.call($(".menu-tab-container"))

    tabs.forEach(element => {
        element.addEventListener("click", setTab)      
    });
    tabContainer.forEach(element => {
        element.style.display = "none"
    });

    setInterval(update, 1000 / updateSpeed)
}

function setTab(evt){
    var id = evt.target.dataset.tab
    var tabContainer = Array.prototype.slice.call($(".menu-tab-container"))
    
    tabContainer.forEach(element => {
        element.style.display = "none"
    });
    $("#" + id).style.display = "block"
}

function updateUI(){

}

function update(){

    updateUI()
}



