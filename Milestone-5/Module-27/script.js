console.log("Hello")

document.getElementById("login-btn").addEventListener("click", (event) => {
    event.preventDefault()

    const accountNumber = document.getElementById("account-number").value;
    const accountPin = document.getElementById("account-pin").value;

    if (accountNumber.length === 11) {

        if (accountPin === "1234") {
            alert("Login Successful ✅")
        } else {
            console.log("Wrong PIN ❌")
        }

    } else {
        alert("Give 11 digit Number")
    }
})

