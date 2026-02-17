console.log("Jdegseges")
console.log(document)

const liCollection = document.getElementsByTagName("li")
for (const li of liCollection) {
    console.log(li.innerText)
}
console.log(liCollection)


const fruitTitle = document.getElementById("fruit-heading")
fruitTitle.innerText = "New Text1"

const fruitLists = document.getElementsByClassName("fruit-list")

console.log(fruitLists)


for (const single of fruitLists) {
    console.log(single)
    single.innerText = 'Chaged'
}
console.log(fruitTitle.style)
fruitTitle.style.backgroundColor = "yellow"
fruitTitle.style.textAlign='center'


fruitTitle.setAttribute("fruitTitle",'hs')


const singers = document.querySelectorAll(".singer li") //Nodelist


for (const singer of singers) {
    console.log(singer)
}
console.log(singers)