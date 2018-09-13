var form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault()
})





var text = document.querySelector("textarea")
text.addEventListener("input", function(e){
    console.log(e.target.value)
})


// const childNode = document.querySelector("textarea");
// const parentNode = childNode.parentNode;
// // const removedNode = parentNode.removeChild(childNode.value);
// console.log(childNode.textContent.value)