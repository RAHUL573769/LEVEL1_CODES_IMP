function handleSelect() {
    console.log("Handle Select")
}

const allBtn = document.getElementsByClassName("add-btn")
let count = 0;
for (const singleBtn of allBtn) {
    singleBtn.addEventListener("click", (e) => {
        count = count + 1
        console.log(count)
        // document.getElementById("cart-count").innerText=count
        setInnerText("cart-count", count)
        console.log(e.target.parentNode.childNodes[1].innerText)

        const placeName = e.target.parentNode.childNodes[1].innerText
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText
        console.log(price)

        const selectedCotainer = document.getElementById("selected-place-container")
        const li = document.createElement("li")
        const p1 = document.createElement("p")
        p1.innerText = placeName
        const p2 = document.createElement("p")
        p2.innerText = price
        li.appendChild(p1)
        li.appendChild(p2)
        selectedCotainer.appendChild(li)

        const totalCost = document.getElementById("total-cost").innerText
        const convertedTotalCost = parseInt(totalCost)
        const converted=parseInt(price)
        // console.log(typeof (converted), typeof (convertedTotalCost))

        const sum=convertedTotalCost+converted
        // document.getElementById("total-cost").innerText=convertedTotalCost+converted
        setInnerText("total-cost", sum)
        const grandTotal = document.getElementById("grand-total").innerText
        const convertedGrandTotal = parseInt(grandTotal)
        const sum2  = convertedGrandTotal + sum
        console.log(sum2)
        setInnerText("grand-total",sum2)


    })
}

console.log(allBtn)

function setInnerText(id,value){
  document.getElementById(id).innerText=value
}