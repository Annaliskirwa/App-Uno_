document.addEventListener("click", function(e){
    if (e.target.classList.contains("edit-me")) {
  let userInput = prompt("Enter your desired new text")
  console.log(userInput)
    }
})