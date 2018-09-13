const formElement = document.querySelector("form")
const textBoxElement = document.querySelector(".user-text")
const timelineElement = document.querySelector(".timeline")
const characterCounterElement = document.querySelector(".character-counter")
const submitButtonElement = document.querySelector(".submit-button")
submitButtonElement.disabled = true // all submit button changes contribute to submit button actions
characterCounterElement.textContent = `Type To Tweet something..`

user();;
characterCounter();





function user() {
  //when submit is clicked, add tweet to timeline
  formElement.addEventListener("submit", event => {
    event.preventDefault()
    console.log("default prevented")
    const latestTweet = document.querySelector(".latest-tweet")
    const userInput = textBoxElement.value
    



    const newTweet = document.createElement("div")
    newTweet.setAttribute("class", "latest-tweet")
    newTweet.textContent = userInput

    const linkRegex = /(?:|[ ])@([a-zA-Z]+)/g
    newTweet.innerHTML = newTweet.textContent.replace(linkRegex, ` <a href="/@$1">@$1</a>`)

    const deleteIconElement = document.createElement("button")
    deleteIconElement.textContent = "delete"
    newTweet.appendChild(deleteIconElement)
    deleteIconElement.addEventListener("click", event => {
      timelineElement.removeChild(newTweet)
    })


    timelineElement.insertBefore(newTweet, latestTweet)
    textBoxElement.value = ""
    characterCounterElement.textContent = `Type To Tweet something..`
    characterCounterElement.style.color = "black"
    submitButtonElement.disabled = true
  })
}


//updates character counter
function characterCounter() {
  textBoxElement.addEventListener("input", event => {
    const currentCount = event.target.value.length
    characterCounterElement.textContent = `${currentCount} / 280`
    if (currentCount > 280) {
      characterCounterElement.style.color = "red"
      submitButtonElement.disabled = true
      characterCounterElement.textContent = `Dude.. you have typed over 280`
      
    }else if(currentCount < 1){
      characterCounterElement.textContent = `Type To Tweet something..`
      submitButtonElement.disabled = true
    }

    else {
      characterCounterElement.style.color = "black"
      submitButtonElement.disabled = false
    }
  })
}

















// const childNode = document.querySelector("textarea");
// const parentNode = childNode.parentNode;
// // const removedNode = parentNode.removeChild(childNode.value);
// console.log(childNode.textContent.value)