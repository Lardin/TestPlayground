(function() {

window.addEventListener("load", initialize)

const updateSpeed = 30
var tabs
var tabContainer

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
    tabs = [].slice.call($(".menu-tab"))
    tabContainer = [].slice.call($(".menu-tab-container"))

    hideAllTabs()
    $("#stats-tab").style.display = "block"
    $("#stats-menu-item").classList.add("w3-red")

    tabs.forEach(element => {
        element.addEventListener("click", setTab)      
    });

    setInterval(update, 1000 / updateSpeed)
}
function setTab(evt){
    var element = evt.target
    var id = element.dataset.tab
    
    hideAllTabs()

    $("#" + id).style.display = "block"
    element.classList.add("w3-red")
}
function hideAllTabs(){

    tabContainer.forEach(element => {
        element.style.display = "none"
    });
    tabs.forEach(element => {
        element.classList.remove("w3-red")
    });
}
function updateUI(){

}

function update(){

    updateUI()
}


})();
