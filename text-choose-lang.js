
import {getStartedSetUpIntroTextEn, renderSetClueModalTextEn, checkInputTextEn, renderSetNextClueTextEn, introPlayModalAlertTextEn, introPlayModalTextEn, checkCodeAlertTextEn, locationMessagesTextEn, randomQuestionTextEn, languageTextEn, imagesAltTextEn} from "./en/text_en.js"
import {getStartedSetUpIntroTextHr, renderSetClueModalTextHr, checkInputTextHr, renderSetNextClueTextHr, introPlayModalAlertTextHr, introPlayModalTextHr, checkCodeAlertTextHr, locationMessagesTextHr, randomQuestionTextHr, languageTextHr, imagesAltTextHr} from "./hr/text_hr.js"

import {startLocationListHr, endLocationListHr, eventListHr, travelListHr} from "./hr/random-events_hr.js"
import {startLocationListEn, endLocationListEn, eventListEn, travelListEn} from "./en/random-events_en.js"

let language = ""

// button choose english language
if(document.querySelector("#choose-en-btn")){
    document.querySelector("#choose-en-btn").addEventListener("click", function(){
        language = "eng"
        localStorage.setItem("language", JSON.stringify(language))
    })
}

// button choose croatian language
if(document.querySelector("#choose-hr-btn")){
    document.querySelector("#choose-hr-btn").addEventListener("click", function(){
        language = "hr"
        localStorage.setItem("language", JSON.stringify(language))
    })
}

// get a language from local storage
const localStorageGetLanguage = JSON.parse(localStorage.getItem("language"))



// *********************************
// TEXT FILE
// *********************************

// SET-GAME TEXT
export const getStartedSetUpIntroText = (localStorageGetLanguage==="eng") ? getStartedSetUpIntroTextEn : (localStorageGetLanguage==="hr") ? getStartedSetUpIntroTextHr : []
export const renderSetClueModalText = (localStorageGetLanguage==="eng") ? renderSetClueModalTextEn : (localStorageGetLanguage==="hr") ? renderSetClueModalTextHr : []
export const checkInputText = (localStorageGetLanguage==="eng") ? checkInputTextEn : (localStorageGetLanguage==="hr") ? checkInputTextHr : []
export const renderSetNextClueText = (localStorageGetLanguage==="eng") ? renderSetNextClueTextEn : (localStorageGetLanguage==="hr") ? renderSetNextClueTextHr : []

// PLAY-GAME TEXT
export const introPlayModalAlertText = (localStorageGetLanguage==="eng") ? introPlayModalAlertTextEn : (localStorageGetLanguage==="hr") ? introPlayModalAlertTextHr : []
export const introPlayModalText = (localStorageGetLanguage==="eng") ? introPlayModalTextEn : (localStorageGetLanguage==="hr") ? introPlayModalTextHr : []
export const checkCodeAlertText = (localStorageGetLanguage==="eng") ? checkCodeAlertTextEn : (localStorageGetLanguage==="hr") ? checkCodeAlertTextHr : []
export const locationMessagesText = (localStorageGetLanguage==="eng") ? locationMessagesTextEn : (localStorageGetLanguage==="hr") ? locationMessagesTextHr : []
export const imagesAltText = (localStorageGetLanguage==="eng") ? imagesAltTextEn : (localStorageGetLanguage==="hr") ? imagesAltTextHr : []

// RANDOM QUESTION
export const randomQuestionText = (localStorageGetLanguage==="eng") ? randomQuestionTextEn : (localStorageGetLanguage==="hr") ? randomQuestionTextHr : []

// LANGUAGE
export const languageText = (localStorageGetLanguage==="eng") ? languageTextEn : (localStorageGetLanguage==="hr") ? languageTextHr : []



// *********************************
// RANDOM EVENTS FILE
// *********************************
export const startLocationList = (localStorageGetLanguage==="eng") ? startLocationListEn : (localStorageGetLanguage==="hr") ? startLocationListHr : []
export const endLocationList = (localStorageGetLanguage==="eng") ? endLocationListEn : (localStorageGetLanguage==="hr") ? endLocationListHr : []
export const eventList = (localStorageGetLanguage==="eng") ? eventListEn : (localStorageGetLanguage==="hr") ? eventListHr : []
export const travelList = (localStorageGetLanguage==="eng") ? travelListEn : (localStorageGetLanguage==="hr") ? travelListHr : []


