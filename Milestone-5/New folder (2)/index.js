console.log("external")

const makePurple = document.getElementById("make-purple")
makePurple.onclick = function () {
  document.body.style.backgroundColor = "purple"
}

document.getElementById("update-title").addEventListener("click", () => {
  const title = document.getElementById("title")
  const input = document.getElementById("input")

  title.innerText = input.value
})

document.getElementById("update-text").addEventListener("click", () => {
  const title = document.getElementById("title")
  const input = document.getElementById("input")

  title.innerText = input.value
})
