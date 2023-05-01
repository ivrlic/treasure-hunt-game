import {startLocationList, endLocationList, eventList, travelList} from "./text-choose-lang.js"
import {startLocationPosition3000, startLocationPosition2500, startLocationPosition2000, startLocationPosition1500,
        middleLocationPositionList3000, middleLocationPositionList2500, middleLocationPositionList2000, middleLocationPositionList1500,
        endLocationPosition3000, endLocationPosition2500, endLocationPosition2000, endLocationPosition1500} from "./location-position.js"


// get random number from 0 to (length-1)
function getRandomIndex(length){
    const randomIndex = Math.floor (Math.random() * length)
    return randomIndex
}

export let randomStartLocation = ""
export let randomEventList = []
export let randomTravelList = []
export let randomEndLocation = ""
export let randomQuestionHtml = ""
export let randomCorrectAnswer = ""
export let randomMiddleLocationPositionList = []

const clueList = JSON.parse(localStorage.getItem("clueList"))


// there must be a clueList in local storage in order random functions to work
if (clueList){
    const clueListLength = clueList.length

    // *******************************
    // *** RANDOM START LOCATION ***
    // *******************************
    randomStartLocation = startLocationList[getRandomIndex(startLocationList.length)]

    
    // *******************************
    // *** RANDOM EVENT LIST ***
    // *******************************
    let firstQuestionEvent = ""
    // search for random event in the eventList until it includes a question
    while (!firstQuestionEvent.question) {
        firstQuestionEvent = eventList[getRandomIndex(eventList.length)]
            if (firstQuestionEvent.question) {
            eventList.splice(firstQuestionEvent.num-1, 1)
            break
        }
    }

    // clueListLength must be higher than 1 because of one clue that leads to the endLocation
    // the if statement is not necessary here because clueListLength should be always higher than 1 (there should be at least one event that contains a question because a question is requested at the endLocation)
    if (clueListLength > 1) {
        // first event must include a question
        randomEventList.push(firstQuestionEvent)

        // other events are random
        if(clueListLength > 2){
            // event array length should be clueListLength - 2 long because of: 1. the firstQuestionEvent; 2. one clue that leads to the endLocation
            const eventArrayLength = clueListLength - 2
            for (let i = 0; i < eventArrayLength; i++){
                randomEventList.push(eventList.splice(getRandomIndex(eventList.length),1)[0])
            }
        }
    }


    // *******************************
    // *** RANDOM TRAVEL LIST ***
    // *******************************
    // travel array length should be equal to clueListLength
    const travelArrayLength = clueListLength
    for (let i = 0; i < travelArrayLength; i++){
        randomTravelList.push(travelList.splice(getRandomIndex(travelList.length),1)[0])
    }


    // *******************************
    // *** RANDOM END LOCATION ***
    // *******************************
    randomEndLocation = endLocationList[getRandomIndex(endLocationList.length)]

    // RANDOM QUESTION
    // *****************
    let questionList = []
    let correctAnswerList = []
    let wrongAnswersList = []
    for (let i = 0; i < randomEventList.length; i++){
        if (randomEventList[i].question){
            questionList.push(randomEventList[i].question)
            correctAnswerList.push(randomEventList[i].correctAnswer)
            wrongAnswersList.push(randomEventList[i].wrongAnswers)
        }
    }
    const randomIndexForQuestion = getRandomIndex(questionList.length)
    const randomQuestion = questionList[randomIndexForQuestion]
    const randomWrongAnswers = wrongAnswersList[randomIndexForQuestion]
    randomCorrectAnswer = correctAnswerList[randomIndexForQuestion]

    function getRandomAnswerList(){
        // get array of all answers (correct and wrong ones)
        let answerList = []
        answerList.push(randomCorrectAnswer)
        for (let i = 0; i < randomWrongAnswers.length; i++){
            answerList.push(randomWrongAnswers[i])
        }
        // get random order array of answers
        let randomAnswerList = []
        const arrayLength = answerList.length
        for (let i = 0; i < arrayLength; i++){
            randomAnswerList.push(answerList.splice(getRandomIndex(answerList.length),1)[0])
        }
        return randomAnswerList
    }

    const randomAnswerList = getRandomAnswerList()

    randomQuestionHtml = `
            <div id="treasure-question-cont">
                <p class="treasure-question"> ${randomQuestion} </p>
                <div id="treasure-alert"></div>
                <ol class="flex">
                    <li><button data-location-num="end" class="grip-btn" id="answer1">${randomAnswerList[0]}</button></li>
                    <li><button data-location-num="end" class="grip-btn" id="answer2">${randomAnswerList[1]}</button></li>
                    <li><button data-location-num="end" class="grip-btn" id="answer3">${randomAnswerList[2]}</button></li>
                    <li><button data-location-num="end" class="grip-btn" id="answer4">${randomAnswerList[3]}</button></li>
                </ol>
            </div>`
}


// *******************************
// *** RANDOM LOCATION POSITIONS ***
// *******************************
// START POSITION
// *****************
export function getStartLocationPosition(){
    // getting position depending on media query
    if (window.matchMedia("(min-width: 1250px)").matches){
        document.getElementById(`location-1`).style.top=startLocationPosition3000.top
        document.getElementById(`location-1`).style.left=startLocationPosition3000.left
    } else if (window.matchMedia("(min-width: 1000px)").matches){
        document.getElementById(`location-1`).style.top=startLocationPosition2500.top
        document.getElementById(`location-1`).style.left=startLocationPosition2500.left
    } else if (window.matchMedia("(min-width: 600px)").matches){
        document.getElementById(`location-1`).style.top=startLocationPosition2000.top
        document.getElementById(`location-1`).style.left=startLocationPosition2000.left
    } else {
        document.getElementById(`location-1`).style.top=startLocationPosition1500.top
        document.getElementById(`location-1`).style.left=startLocationPosition1500.left
    }
} 

// MIDDLE POSITIONS
// *****************
if(clueList){

const middleLocationsMaxNum = middleLocationPositionList3000.length

// randomly cutting off as many middle location positions from original array as to get needed number of them (clueListLength-1)
function getRandomMiddleLocationPositions(){
    for (let i=0; i<(middleLocationsMaxNum-(clueList.length-1)); i++) {
        const randomIndex = getRandomIndex(middleLocationPositionList3000.length)
        middleLocationPositionList3000.splice(randomIndex, 1)
        middleLocationPositionList2500.splice(randomIndex, 1)
        middleLocationPositionList2000.splice(randomIndex, 1)
        middleLocationPositionList1500.splice(randomIndex, 1)
    }
    const newArray = []
    newArray.push(middleLocationPositionList3000)
    newArray.push(middleLocationPositionList2500)
    newArray.push(middleLocationPositionList2000)
    newArray.push(middleLocationPositionList1500)
    return newArray
}

randomMiddleLocationPositionList = getRandomMiddleLocationPositions()
}

// END POSITION
// *****************
export function getEndLocationPosition(){
    // getting position depending on media query
    if (window.matchMedia("(min-width: 1250px)").matches){
        document.getElementById(`location-11`).style.top=endLocationPosition3000.top
        document.getElementById(`location-11`).style.left=endLocationPosition3000.left
    } else if (window.matchMedia("(min-width: 1000px)").matches){
        document.getElementById(`location-11`).style.top=endLocationPosition2500.top
        document.getElementById(`location-11`).style.left=endLocationPosition2500.left
    } else if (window.matchMedia("(min-width: 600px)").matches){
        document.getElementById(`location-11`).style.top=endLocationPosition2000.top
        document.getElementById(`location-11`).style.left=endLocationPosition2000.left
    } else {
        document.getElementById(`location-11`).style.top=endLocationPosition1500.top
        document.getElementById(`location-11`).style.left=endLocationPosition1500.left
    }
} 

