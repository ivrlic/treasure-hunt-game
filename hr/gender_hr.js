
let gender = ""

// button choose male
if(document.querySelector("#choose-male-btn")){
    document.querySelector("#choose-male-btn").addEventListener("click", function(){
        gender = "male"
        localStorage.setItem("gender", JSON.stringify(gender))
    })
}

// button choose female
if(document.querySelector("#choose-female-btn")){
    document.querySelector("#choose-female-btn").addEventListener("click", function(){
        gender = "female"
        localStorage.setItem("gender", JSON.stringify(gender))
    })
}

const male = {
    lower1: "o",
    upper1: "O",
    lower2: "io",
    upper2: "IO",
    lower3: "an",
    upper3: "AN",
    lower4: "ao",
    upper4: "AO",
    lower5: "",
    upper5: "",
    lower6: "če",
    upper6: "ČE",
    lower7: "u",
    upper7: "U"
}

const female = {
    lower1: "la",
    upper1: "LA",
    lower2: "jela",
    upper2: "JELA",
    lower3: "na",
    upper3: "NA",
    lower4: "la",
    upper4: "LA",
    lower5: "a",
    upper5: "A",
    lower6: "kinjo",
    upper6: "KINJO",
    lower7: "ice",
    upper7: "ICE"
}

// get a gender from local storage
const localStorageGetGender = JSON.parse(localStorage.getItem("gender"))

export const gender1 =  (localStorageGetGender==="male") ? male.lower1 : (localStorageGetGender==="female") ? female.lower1 : ""
export const genderUpper1 =  (localStorageGetGender==="male") ? male.upper1 : (localStorageGetGender==="female") ? female.upper1 : ""
export const gender2 =  (localStorageGetGender==="male") ? male.lower2 : (localStorageGetGender==="female") ? female.lower2 : ""
export const genderUpper2 =  (localStorageGetGender==="male") ? male.upper2 : (localStorageGetGender==="female") ? female.upper2 : ""
export const gender3 =  (localStorageGetGender==="male") ? male.lower3 : (localStorageGetGender==="female") ? female.lower3 : ""
export const genderUpper3 =  (localStorageGetGender==="male") ? male.upper3 : (localStorageGetGender==="female") ? female.upper3 : ""
export const gender4 =  (localStorageGetGender==="male") ? male.lower4 : (localStorageGetGender==="female") ? female.lower4 : ""
export const genderUpper4 =  (localStorageGetGender==="male") ? male.upper4 : (localStorageGetGender==="female") ? female.upper4 : ""
export const gender5 =  (localStorageGetGender==="male") ? male.lower5 : (localStorageGetGender==="female") ? female.lower5 : ""
export const genderUpper5 =  (localStorageGetGender==="male") ? male.upper5 : (localStorageGetGender==="female") ? female.upper5 : ""
export const gender6 =  (localStorageGetGender==="male") ? male.lower6 : (localStorageGetGender==="female") ? female.lower6 : ""
export const genderUpper6 =  (localStorageGetGender==="male") ? male.upper6 : (localStorageGetGender==="female") ? female.upper6 : ""
export const gender7 =  (localStorageGetGender==="male") ? male.lower7 : (localStorageGetGender==="female") ? female.lower7 : ""
export const genderUpper7 =  (localStorageGetGender==="male") ? male.upper7 : (localStorageGetGender==="female") ? female.upper7 : ""
