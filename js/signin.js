var signInEmail = document.getElementById("signInEmail");
var signInPass = document.getElementById("signInPass");
var signInBtn = document.getElementById("signInBtn");

if (localStorage.getItem("users") == null) {
    uContainer = []
} else {
    uContainer = JSON.parse(localStorage.getItem("users"))
}

function signInValid() {
    for (var i = 0; uContainer.length; i++) {
        if (signInEmail.value.toLowerCase() == uContainer[i].email.toLowerCase() && signInPass.value == uContainer[i].pass) {
            window.location.href = "CRUD.html"
            error7.classList.replace("d-flex", "d-none")
            user = uContainer[i].fName + " " +uContainer[i].lName
            localStorage.setItem("login",user)
        }
        else {
            error7.classList.replace("d-none", "d-flex")
        }
    }
}

signInBtn.addEventListener("click", signInValid)
