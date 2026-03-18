document.getElementById("btn").addEventListener("click", () => {
    console.log("Boss")

})

function handleClick(event) {
    console.log(event.target.parentNode.parentNode.childNodes[1].innerText)
}