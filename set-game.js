import {getStartedSetUpIntroText, renderSetClueModalText, checkInputText, renderSetNextClueText, languageText} from "./text-choose-lang.js"


const clueModal = document.getElementById("clue-modal")

let clueNum = 0
const lastClueNum = 10
let clueList
let clueCodeList
let clueQuestionCodeList

const localStorageGetClueNum = JSON.parse( localStorage.getItem("clueNum"))
const localStorageGetClueList = JSON.parse( localStorage.getItem("clueList"))
const localStorageGetClueCodeList = JSON.parse( localStorage.getItem("clueCodeList"))
const localStorageGetClueQuestionCodeList = JSON.parse( localStorage.getItem("clueQuestionCodeList"))
if(localStorageGetClueNum) {
    clueNum = localStorageGetClueNum
    clueList = localStorageGetClueList
    clueCodeList = localStorageGetClueCodeList
    clueQuestionCodeList = localStorageGetClueQuestionCodeList
} else {
    clueNum = 1
    clueList = []
    clueCodeList = []
    clueQuestionCodeList = []
}

// navigation hamburger opening and closing menu
if (document.querySelector(".nav-toggle-btn")) {
document.querySelector(".nav-toggle-btn").addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
  })
};
  
// navigation restart button
document.getElementById("restart-set-up").addEventListener("click", getStartedSetUpIntro)

// intro modal if setting up was started 
if (clueNum>1) {
    getStartedSetUpIntro()
}

function getStartedSetUpIntro() {
    clueModal.style.display="none"
    document.getElementById("intro-set-modal").style.display="flex"
    document.getElementById("intro-set-modal").innerHTML = `
            <p>${getStartedSetUpIntroText.p}</p>
            <button class="grip-btn" id="continue-set-hunt-btn">${getStartedSetUpIntroText.continueBtn}</button>
            <button class="grip-btn" id="new-set-hunt-btn">${getStartedSetUpIntroText.newBtn}</button>
            `
}

document.addEventListener("click", function(e){
    // continue setting up button
    if(e.target.id === "continue-set-hunt-btn"){
        document.getElementById("intro-set-modal").style.display = "none"
        renderSetClueModal()
        // at least two clues in order to finish setting up a game
        if (clueNum>2) {
            document.getElementById("finish-setting-btn").style.display="block" 
        }
        if (clueList.length===lastClueNum) {
            renderSetNextClue()
        }
    // new setting up button
    } else if (e.target.id === "new-set-hunt-btn") {
        document.getElementById("intro-set-modal").style.display = "none"
        localStorage.removeItem("clueList")
        localStorage.removeItem("clueCodeList")
        localStorage.removeItem("clueQuestionCodeList")
        localStorage.removeItem("clueNum")
        clueNum = 1
        clueList = []
        clueCodeList = []
        clueQuestionCodeList = []
        renderSetClueModal()
    }
})

// close intro modal button
document.addEventListener("click", function(e){
    if(e.target.textContent === "✓" && e.target.parentElement.id === "intro-set-modal"){
        document.getElementsByClassName(e.target.parentElement.className)[0].style.display="none"
        renderSetClueModal()
        // there must be at least two clues in order to finish setting up a game
        if (clueNum>2) {
            document.getElementById("finish-setting-btn").style.display="block" 
        }
    }
})

// rendering make your hunt
function renderSetClueModal() {
    clueModal.style.display="flex"
    clueModal.innerHTML = `
        <h2 id="make-hunt-title">${renderSetClueModalText.title}</h2>
        <h3 class="mini-heading" id="make-hunt-subtitle">${clueNum}. ${renderSetClueModalText.subtitle}</h3>
        <div id="set-clue-container">
            <p>I. ${renderSetClueModalText.p1}</p>
            
            <div>
                <div>
                    <input type="radio" class ="radio-check" id="clue-radio-description" name="clue">
                    <label for="clue-description">${renderSetClueModalText.labelDesc}</label>
                </div>
                <textarea class="not-displayed" id="clue-description" placeholder=${renderSetClueModalText.placeholderDesc}></textarea>
            </div>

            <div>
                <div>
                    <input type="radio" class ="radio-check" id="clue-radio-association" name="clue">
                    <label for="clue-assoc1">${renderSetClueModalText.labelAssoc}</label>
                </div>
                <div class="association-cont not-displayed" id="clue-association-cont">
                    <input type="text" id="clue-assoc1" aria-label=${renderSetClueModalText.labelAssoc1} placeholder=${renderSetClueModalText.placeholderAssoc1}>
                    <input type="text" id="clue-assoc2" aria-label=${renderSetClueModalText.labelAssoc2} placeholder=${renderSetClueModalText.placeholderAssoc2}>
                    <input type="text" id="clue-assoc3" aria-label=${renderSetClueModalText.labelAssoc3} placeholder=${renderSetClueModalText.placeholderAssoc3}>
                </div>
            </div>
        </div>

        <div id="set-code-container">
            <p id="clue-code-descr">II. ${renderSetClueModalText.p2A} ${clueNum+1}. ${renderSetClueModalText.p2B}</p>        
            <button id="clue-question-code-btn">${renderSetClueModalText.questionBtnA}</button>
            <label class="not-displayed clue-code-label" for="clue-question-code" id="clue-question-code-label">
                ${renderSetClueModalText.questionLabel}
            </label>
            <input class="not-displayed" type="text" id="clue-question-code" placeholder=${renderSetClueModalText.questionPlaceholder}>
            <label for="clue-code" class="clue-code-label">${renderSetClueModalText.codeLabel}</label>
            <input type="text" id="clue-code" placeholder=${renderSetClueModalText.codePlaceholder} required>
        </div>

        <div class="alert"></div>
        <div class="modal-footer">
            <button class="grip-btn" id="save-clue-btn">${renderSetClueModalText.saveBtnA} ${clueNum}. ${renderSetClueModalText.saveBtnB}</button>
            <a href="main-menu_${languageText}.html">
                <button class="grip-btn not-displayed" id="finish-setting-btn">${renderSetClueModalText.finish}</button>
            </a> 
        </div>
    `
    clueModal.scrollTo(0, 0);
}

// toggling show/hide question button
document.addEventListener("click", function(e){
    if(e.target.id==="clue-question-code-btn"){
        const questionBtn = document.getElementById("clue-question-code-btn")
        document.getElementById("clue-question-code-label").classList.toggle("not-displayed")
        document.getElementById("clue-question-code").classList.toggle("not-displayed")
        if (questionBtn.textContent === `${renderSetClueModalText.questionBtnA}`) {
            questionBtn.textContent = `${renderSetClueModalText.questionBtnB}`
        } else (
            questionBtn.textContent = `${renderSetClueModalText.questionBtnA}`
        ) 
    }
})

// clicking on radio buttons opens and closes connected area
document.addEventListener("click", function(e){
    const clueDescription = document.getElementById(`clue-description`)
    const clueAssociationCont = document.getElementById(`clue-association-cont`)

    if(e.target.id === `clue-radio-description`){
        clueDescription.classList.remove("not-displayed")
        clueAssociationCont.classList.add("not-displayed")
    } else if(e.target.id === `clue-radio-association`){
        clueDescription.classList.add("not-displayed")
        clueAssociationCont.classList.remove("not-displayed")
    }
})


// SAVE BUTTON
document.addEventListener("click", function(e){
    if(e.target.textContent === `${renderSetClueModalText.saveBtnA} ${clueNum}. ${renderSetClueModalText.saveBtnB}`){
        saveClue()
    }
})

function saveClue(){
    const clueDescription = document.getElementById(`clue-description`)
    const association1 = document.getElementById(`clue-assoc1`)
    const association2 = document.getElementById(`clue-assoc2`)
    const association3 = document.getElementById(`clue-assoc3`)
    const alert = document.getElementsByClassName("alert")
    const clueQuestionCode = document.getElementById("clue-question-code")
    const clueCode = document.getElementById("clue-code")

    // if checked radio button
    if (document.querySelector(`input[name="clue"]:checked`)){

        // radio description button
        if(document.querySelector(`input[name="clue"]:checked`).id===`clue-radio-description`){
            if(clueDescription.value){
                if(clueCode.value) {
                    const clueDescriptionHtml = `
                        <p>${clueDescription.value}</p>
                        `
                    clueList.push(clueDescriptionHtml)
                    clueDescription.value = ""
                    association1.value = ""
                    association2.value = ""
                    association3.value = ""       
                    saveCode (clueCode, clueQuestionCode)
                    alert[0].innerHTML = `
                    <span class="saved">${clueNum}. ${checkInputText.clueSaved}</span>
                    `
                    renderSetNextClue()
                    
                } else if(!clueCode.value) {
                    alert[0].innerHTML = `
                    <span class"alert">${checkInputText.noCode}</span>
                    `
                }
            } else if (!clueDescription.value && clueCode.value) {
                alert[0].innerHTML = `
                <span class"alert">${checkInputText.noDesc}</span>
                `
            } else {alert[0].innerHTML = `
                <span class"alert">${checkInputText.noDesc}</span></br>
                <span class"alert">${checkInputText.noCode}</span>
                `
            }

        // radio association button
        } else if (document.querySelector(`input[name="clue"]:checked`).id===`clue-radio-association`){
            association1.required
            association2.required
            association3.required
            if(association1.value && association2.value && association3.value){
                if(clueCode.value) {
                    const clueAssociationHtml = `
                        <div>  
                            <p>${association1.value}</p>
                            <p>${association2.value}</p>
                            <p>${association3.value}</p>
                        </div>
                        `
                    clueList.push(clueAssociationHtml)
                    association1.value = ""
                    association2.value = ""
                    association3.value = ""
                    clueDescription.value = ""
        
                    saveCode (clueCode, clueQuestionCode)
                    alert[0].innerHTML = `
                    <span class="saved">${clueNum}. ${checkInputText.clueSaved}</span>
                    `
                    renderSetNextClue()

                } else if(!clueCode.value) {
                    alert[0].innerHTML = `
                    <span class"alert">${checkInputText.noCode}</span>
                    `
                }  
            } else if (!(association1.value && association2.value && association3.value) && clueCode.value) {
                alert[0].innerHTML = `
                <span class"alert">${checkInputText.noAssoc}</span>
                `
            } else {
                alert[0].innerHTML = `
                <span class"alert">${checkInputText.noAssoc}</span></br>
                <span class"alert">${checkInputText.noCode}</span>
                `
            }
        }
    localStorage.setItem("clueList", JSON.stringify(clueList))
    localStorage.setItem("clueCodeList", JSON.stringify(clueCodeList))
    localStorage.setItem("clueQuestionCodeList", JSON.stringify(clueQuestionCodeList))       

    // if not checked radio button
    } else (
        alert[0].innerHTML = `
            <span class"alert">${checkInputText.noOption}</span>
        `
    )  
}

function saveCode (clueCode, clueQuestionCode){
        clueCodeList.push(clueCode.value)
        clueCode.value=""
        clueQuestionCodeList.push(clueQuestionCode.value)
        clueQuestionCode.value="" 
}

function renderSetNextClue() {
    // hide save button after lastClueNum(10th clue)
    if(clueNum===lastClueNum){
        document.getElementById("make-hunt-title").classList.add("space-bottom-el")
        document.getElementById("make-hunt-subtitle").style.display="none"
        document.getElementById("set-clue-container").style.display="none"
        document.getElementById("set-code-container").style.display="none"
        document.getElementById("save-clue-btn").style.display="none"
        document.getElementById("finish-setting-btn").style.display="block"                    
        const alert = document.getElementsByClassName("alert")
        alert[0].innerHTML = `
        <p class="saved">${renderSetNextClueText.p1}</p>
        <p class="saved">${renderSetNextClueText.p2}</p>
        `
    } else {
        setTimeout (()=>{
            clueNum ++
            localStorage.setItem("clueNum", JSON.stringify(clueNum))
            clueModal.style.display="none"
            setTimeout (function(){
                renderSetClueModal()
                if (clueNum>2) {
                    // there must be at least two clues in order to finish setting up a game
                    document.getElementById("finish-setting-btn").style.display="block" 
                }
            }, 100)
        }, 500)
    }
}


