
window.addEventListener("load", initialize)

const updateSpeed = 30
var tabs
var tabContainer
var playerStatsFields
var playerLifeBar
var game = {
    player:new Player()
}

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
    createStatsWindow()


    tabs = [].slice.call($(".menu-tab"))
    tabContainer = [].slice.call($(".menu-tab-container"))
    playerStatsFields = [].slice.call($(".player-stats-show"))
    playerLifeBar=$("#playerLifeBar")

    hideAllTabs()
    $("#stats-tab").style.display = "block"
    $("#stats-menu-item").classList.add("w3-red")

    tabs.forEach(element => {
        element.addEventListener("click", setTab)      
    });

    
    update()
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
function createStatsWindow(){
    var statsTemplate = $(".player-stats-template")[0]
    var tableBaseAttributes = $("#baseAttributes")
    var keys = Object.keys(game.player.attributes)
    var tds = statsTemplate.content.querySelectorAll("td")
    console.log(statsTemplate)
    keys.forEach(key => {
        var attribute = game.player.attributes[key]
        tds[0].textContent = attribute.label + ":"
        tds[1].dataset.selector = attribute.selector
        var temp = document.importNode(statsTemplate.content, true)
        
        tableBaseAttributes.appendChild(temp)
    });
}
function updatePlayerStatsUI(){
    playerStatsFields.forEach(statField => {
        statField.textContent = game.player.attributes[statField.dataset.selector].value
    });
}
function updatePlayerLife(){
    updateBar(playerLifeBar, game.player.life, game.player.actualLife)
}
function updateBar(bar, max, actual){
    var percentage = (actual/max*100).toFixed(0)
    bar.style.width=percentage+"%"
    bar.textContent=percentage+"%"
}
function updateUI(){
    updatePlayerStatsUI()
    updatePlayerLife()
}

function update(){

    updateUI()
}

