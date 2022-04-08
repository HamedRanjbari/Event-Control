let $ = document
let divText = $.getElementById("divText")
let eventInfo = $.getElementById("eventInfo")
let body = $.body
let eventName = $.getElementById("name")
let eventLocation = $.getElementById("location")
let eventCode = $.getElementById("code")
let eventKey = $.getElementById("key")
let mainNumber = $.getElementById("mainCard")
eventInfo.style.display = "none"
body.addEventListener("keydown", function (event) {
    divText.style.display ="none"
    eventInfo.style.display = "flex"
    event.preventDefault()
    mainNumber.innerHTML = event.keyCode
    eventName.innerHTML = event.key
    eventLocation.innerHTML = event.location
    eventCode.innerHTML = event.keyCode
    eventKey.innerHTML = event.code
    console.log(event);
})