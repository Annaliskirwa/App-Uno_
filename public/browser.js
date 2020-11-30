document.addEventListener("click", function(e){
    if (e.target.classList.contains("edit-me")) {
  let userInput = prompt("Enter your desired new text")
axios.post('/update-item', {text: userInput}).then(function(){//promise ill be back
}).catch(function(){console.log("Try again later")})
    }
})