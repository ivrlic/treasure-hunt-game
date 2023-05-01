
import {introPlayModalAlertText, introPlayModalText, checkCodeAlertText, locationMessagesText, languageText, imagesAltText, randomQuestionText} from "./text-choose-lang.js"
import {randomStartLocation, randomEventList, randomTravelList, randomEndLocation, randomQuestionHtml, randomCorrectAnswer, getStartLocationPosition, randomMiddleLocationPositionList, getEndLocationPosition} from "./get-random.js"


const clueModal = document.getElementById("clue-modal")
const locationCont = document.getElementById("location-cont")

const clueNum = JSON.parse( localStorage.getItem("clueNum"))
const clueList = JSON.parse( localStorage.getItem("clueList"))
const clueCodeList = JSON.parse( localStorage.getItem("clueCodeList"))
const clueQuestionCodeList = JSON.parse( localStorage.getItem("clueQuestionCodeList"))

const endLocationNum = clueList ? clueList.length + 1 : 1
let locationNum = 0
let messageNum = 0
let isAllowedEnterCode = false

let arrayNumMidPosList = getarrayNumMidPosList()
// getting array number of middle positions list depending on media query
function getarrayNumMidPosList() {
    let num
    if (window.matchMedia("(min-width: 1250px)").matches){
        num = "0"
    } else if (window.matchMedia("(min-width: 1000px)").matches){
        num = "1"
    } else if (window.matchMedia("(min-width: 600px)").matches){
        num = "2"
    } else {
        num = "3"
    }
    return num
}

// DRAG AND MOVE
const backImgCont = document.getElementById("back-img-cont");
let isDown = false
let startX
let scrollLeft
let startY
let scrollTop

backImgCont.addEventListener("mousedown", function(e){
    isDown = true
    backImgCont.classList.add("active-cursor-moving")
    startX = e.pageX - backImgCont.offsetLeft
    scrollLeft = backImgCont.scrollLeft
    startY = e.pageY - backImgCont.offsetTop
    scrollTop = backImgCont.scrollTop
})

backImgCont.addEventListener("mouseleave", function(){
    isDown = false
    backImgCont.classList.remove("active-cursor-moving")
})

backImgCont.addEventListener("mouseup", function(){
    isDown = false
    backImgCont.classList.remove("active-cursor-moving")
})

backImgCont.addEventListener("mousemove", function(e){
//     e.preventDefault()
    if(!isDown){
        return //stop function from running
    } else {
        const x = e.pageX - backImgCont.offsetLeft
        const walkX = (x - startX)
        const y = e.pageY - backImgCont.offsetTop
        const walkY = (y - startY)
        backImgCont.scrollLeft = scrollLeft - walkX
        backImgCont.scrollTop = scrollTop - walkY

    }
})


// alert - the game has to be set first in order to play
if(!clueNum || clueNum===1) {
    document.getElementById("intro-play-modal").innerHTML = `
    <h2>${introPlayModalAlertText.title}</h2>
    <p>${introPlayModalAlertText.p1A} (<a href="set-game_${languageText}.html">${introPlayModalAlertText.pLink} </a> &nbsp;${introPlayModalAlertText.p1B})</p> 
    <a class="not-underlined" href="main-menu_${languageText}.html">
        <button class="confirm-btn">&check;</button>
    </a>
    `
}

// navigation hamburger opening and closing menu
if (document.querySelector(".nav-toggle-btn")) {
    document.querySelector(".nav-toggle-btn").addEventListener('click', function(){
        document.body.classList.toggle('nav-open');
    })
};

// check button - getting intro modals and messages
document.addEventListener("click", function(e){
    // intro modal 1
    if(e.target.textContent === "✓" && e.target.parentElement.id === "intro-play-modal"){
        document.getElementById("intro-play-modal").style.display="none"
        document.getElementById("intro2-play-modal").style.display="flex"
        document.getElementById("intro2-play-modal").innerHTML = `
            <h2>${introPlayModalText.title}</h2>
            <div >
                <p>${introPlayModalText.p}</p>
            </div>
            <button class="confirm-btn">&check;</button>
            `
    }
    // intro modal 2
    else if (e.target.textContent === "✓" && e.target.parentElement.id === "intro2-play-modal"){
        renderLocations()
        document.getElementById("intro2-play-modal").style.display="none"
        document.getElementById("blur-cont").classList.add("not-displayed")
        document.getElementById("location-1").classList.add("glow")
        getStartLocationPosition()
        locationNum ++
    }
})


function renderLocations(){
    let middleLocationContHTML = ""
    for(let i = 0; i<(clueList.length-1); i++){
        middleLocationContHTML += `
            <div data-location-num="${i+2}" class="location not-displayed" id="location-${i+2}">
                <img data-location-num="${i+2}" class="img-location" src="${randomEventList[i].img}" alt="${randomEventList[i].imgDesc}">
            </div>
            `
    }
    locationCont.innerHTML = `
        <div data-location-num="1" class="location" id="location-1">
            <img class="img-location" src="" alt="">
        </div>
        ${middleLocationContHTML}
        <div data-location-num="endNum" class="location location-end not-displayed" id="location-11">
            <img class="img-location" src="" alt="">
        </div>
        `
}

//getting location positions by resizing a browser
window.addEventListener ("resize", function(){
    // start position
    if(document.getElementById(`location-1`)){
        getStartLocationPosition()
    }
    // middle positions
    arrayNumMidPosList = getarrayNumMidPosList()
    for (let i=0; i<(clueList.length-1); i++){
        if(document.getElementById(`location-${i+2}`)){
            document.getElementById(`location-${i+2}`).style.top=randomMiddleLocationPositionList[arrayNumMidPosList][i].top
            document.getElementById(`location-${i+2}`).style.left=randomMiddleLocationPositionList[arrayNumMidPosList][i].left
        }
    }
    // end position
    if(document.getElementById(`location-11`)){
        getEndLocationPosition()
    }
})

// RENDER LOCATION MESSAGES BUTTONS
document.addEventListener("click", function(e){
    if(e.target.dataset.locationNum === locationNum.toString())
    {
        // first location start message
        if (messageNum === 0 && locationNum === 1){
            renderLocationMessageStart(locationNum)
            messageNum++

        // other messages
        } else if (messageNum === 0 && locationNum > 1) {
            renderLocationMessage1(locationNum)
            messageNum++
        } else if (messageNum === 1) {
            renderLocationMessage2(locationNum)
            messageNum++
        } else if (messageNum === 2) {
            renderLocationMessage3(locationNum)
            messageNum++
        } else if (messageNum === 3) {
            document.querySelector(".close-btn").parentElement.style.display="none"
            messageNum = 0
            isAllowedEnterCode = true
            document.getElementById(`location-${locationNum}`).classList.remove("glow")
            // check if there is end location to appear after this message
            if(locationNum === (endLocationNum-1)){
                // end location appearing
                document.getElementById(`location-11`).classList.remove("not-displayed")
                // making end location glow
                document.getElementById(`location-11`).classList.add("glow")
                // positioning end location                
                getEndLocationPosition()
            } else {
                document.getElementById(`location-${locationNum+1}`).classList.remove("not-displayed")
                document.getElementById(`location-${locationNum+1}`).classList.add("glow")
                document.getElementById(`location-${locationNum+1}`).style.top=randomMiddleLocationPositionList[arrayNumMidPosList][locationNum-1].top
                document.getElementById(`location-${locationNum+1}`).style.left=randomMiddleLocationPositionList[arrayNumMidPosList][locationNum-1].left
            }
        }

        // opening and closing code modal for the next location
    } else if(e.target.dataset.locationNum === (locationNum + 1).toString() || e.target.dataset.locationNum === "endNum"){
        if(isAllowedEnterCode === true){
            renderLocationMessageCode(locationNum+1)
        } 
        document.addEventListener("click", function(e){
    
            if(e.target.id === `check-code-${locationNum+1}-btn`){
                document.getElementById(`check-code-${locationNum+1}-btn`).parentElement.style.display="none"
            }
        })

        // adding input by enter - checking if the code is correct 
        if(document.getElementById(`code${locationNum+1}`)){
            document.getElementById(`code${locationNum+1}`).addEventListener("keypress", function(e){
        
                if(e.key === "Enter"){
                    checkCode()
                    }
            })
        }

        // check code button - checking if the code is correct 
    } else if (e.target.className.includes("check-code-btn")){
            checkCode()

        // treasure location messages buttons
    } else if(e.target.dataset.locationNum === "end"){
        if (messageNum === 1) {
            renderTreasureMessage2()
            messageNum++
        } 
        // message 3 is rendered on the btn click in renderTreasureMessage2()
        else if (messageNum === 3) {
            renderTreasureMessage4()
        } else if (messageNum === 4) {
            return
            // document.getElementById(`location-${locationNum}`).classList.remove("glow")
            // locationNum = 1
            // messageNum = 0
            // isAllowedEnterCode = false
        }
    }
})

function checkCode(){
    if (document.getElementById(`code${locationNum+1}`).value){
        if(clueCodeList[locationNum-1].toLowerCase() === document.getElementById(`code${locationNum+1}`).value.toLowerCase()){
            document.querySelector(".alert").innerHTML = `
                <p class="saved">${checkCodeAlertText.correct}</p>
            `
        setTimeout (()=>{
                    locationNum ++
                    messageNum = 1
                    isAllowedEnterCode = false
                    if (locationNum === endLocationNum) {
                        renderTreasureMessage1()
                    } else {
                        renderLocationMessage1(locationNum)
                    }
                }, 1000)
        } else {
            document.querySelector(".alert").innerHTML = `
                <p>${checkCodeAlertText.wrong}</p>
            `
        }
    } else {
        document.querySelector(".alert").innerHTML = `<p>${checkCodeAlertText.insert}</p>`
    }
}


// *************************
// RENDERING MESSAGES
// *************************
// render the start location 
function renderLocationMessageStart(locationNum){
    clueModal.style.display = "flex"
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <div class="space-bottom-el">
        ${randomStartLocation.story}
    </div>

    <button data-location-num=${locationNum} class="confirm-btn">
        &check;
    </button>
    `
    clueModal.scrollTo(0, 0);
}

// render the code request
function renderLocationMessageCode(locationNum){
    clueModal.style.display = "flex"
    clueModal.classList.remove("not-displayed")
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
        <div>

            <p class="space-bottom-el"> ${locationMessagesText.checkCodeText} </p>
            <div>
                <p class="space-bottom-el question-code">${clueQuestionCodeList[locationNum-2] || ""}</p>
            </div>
            <div class="space-bottom-el flex">
                <label for="">${locationMessagesText.checkCodeLabel}</label>
                <input type="text" id="code${locationNum}" placeholder=${locationMessagesText.checkCodePlaceholder}>
                <button class="grip-btn check-code-btn">${locationMessagesText.checkCodeBtn}</button>
            </div>
        </div>
        <div class="alert"></div>
        <button data-location-num=${locationNum} class="confirm-btn close-btn" id="check-code-${locationNum}-btn">
            &check;
        </button>
    `
    clueModal.scrollTo(0, 0);
}

// render an event
function renderLocationMessage1(locationNum){
    clueModal.style.display = "flex"
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <h3 class="space-bottom-el">${randomEventList[locationNum-2].title}</h3>
    <div class="space-bottom-el">
        ${randomEventList[locationNum-2].story}
    </div>
    <button data-location-num=${locationNum} class="confirm-btn">
        &check;
    </button>
    `
    clueModal.scrollTo(0, 0);
}

// render a clue
function renderLocationMessage2(locationNum){
    clueModal.style.display = "flex"
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <h3 class="mini-heading">${locationNum}. ${locationMessagesText.clueTitle}</h3>
    <div class="space-bottom-el">
        <p class="solve-clue-text">${locationMessagesText.clueText1}</p>

        <div class="solve-clue-cont">
            ${clueList[locationNum-1]}
        </div>

        <p class="solve-clue-text">${locationMessagesText.clueText2}</p>

    </div>

    <button data-location-num=${locationNum} class="confirm-btn">
        &check;
    </button>
    `
    clueModal.scrollTo(0, 0);
}

// render a travel
function renderLocationMessage3(locationNum){
    clueModal.style.display = "flex"
    clueModal.classList.remove("not-displayed")
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <h3 class="travel-title">${locationMessagesText.titleTravel}</h3>
    <div class="space-bottom-el">
        ${randomTravelList[locationNum-1].story}
        ${randomTravelList[locationNum-1].task}
    </div>

    <button data-location-num=${locationNum} class="confirm-btn close-btn">
        &check;
    </button>
    `
    clueModal.scrollTo(0, 0);
}


// TREASURE LOCATION (END LOCATION)
// *************************
function renderTreasureMessage1(){
    clueModal.style.display = "flex"
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <h3 class="space-bottom-el">${randomEndLocation.title}</h3>
    <div class="space-bottom-el">
        ${randomEndLocation.story1}
    </div>
    <button data-location-num="end" class="confirm-btn">
        &check;
    </button>
    `
    clueModal.scrollTo(0, 0);
}

function renderTreasureMessage2(){
    clueModal.style.display = "flex"
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <h3 class="space-bottom-el">${randomEndLocation.title}</h3>
    <div class="space-bottom-el">
        ${randomEndLocation.story2}
        ${randomQuestionHtml}
    </div>
    `
    clueModal.scrollTo(0, 0);

    const treasureAlert = document.getElementById("treasure-alert")
    document.getElementById("treasure-question-cont").addEventListener("click", function(e){
        if(e.target.id === "answer1" || e.target.id === "answer2" || e.target.id === "answer3" || e.target.id === "answer4"){
            if(e.target.textContent === randomCorrectAnswer){
                treasureAlert.innerHTML = `
                    <p class="saved bold">${randomQuestionText.correctAnswer}</p>
                    `
                setTimeout (()=>{
                    renderTreasureMessage3()
                    messageNum++
                }, 1000)
            } else {
                treasureAlert.innerHTML = `
                    <p class="alert">${randomQuestionText.wrongAnswer}</p>
                    `
            }
        }
    })
}

function renderTreasureMessage3(){
    clueModal.style.display = "flex"
    clueModal.classList.remove("not-displayed")
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <div class="space-bottom-el">
        <img class="img-modal" src="../images/treasure.png" alt=${imagesAltText.treasure}>
        ${randomEndLocation.winMessage}
    </div>

    <button data-location-num="end" class="confirm-btn">
        &check;
    </button>
    `
    clueModal.scrollTo(0, 0);
}

function renderTreasureMessage4(){
    clueModal.style.display = "flex"
    clueModal.classList.remove("not-displayed")
    clueModal.innerHTML = `
    <h2 class="space-bottom-el">${locationMessagesText.title}</h2>
    <div class="space-bottom-el">
        ${randomEndLocation.conclusion}
    </div>

    <a class="not-underlined" href="main-menu_${languageText}.html">
        <button data-location-num="end" class="grip-btn" id="end-game-btn">
            ${locationMessagesText.endBtnText}
        </button>
    </a>
    `
    clueModal.scrollTo(0, 0);
}

