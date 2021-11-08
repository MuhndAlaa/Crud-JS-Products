var uFName = document.getElementById("uFName");
var uLName = document.getElementById("uLName");
var uEmail = document.getElementById("uEmail");
var uPass = document.getElementById("uPass");
var uPassConfirm = document.getElementById("uPassConfirm");
var regBtn = document.getElementById("regBtn");
var checkBox = document.getElementById("checkBox");
var uContainer = [];


if (localStorage.getItem("users") == null) {
    uContainer = []
} else {
    uContainer = JSON.parse(localStorage.getItem("users"))
}

function uAdd() {
    var user = {
        fName: uFName.value,
        lName: uLName.value,
        email: uEmail.value,
        pass: uPass.value,
        passConfrim: uPassConfirm.value
    }

    uContainer.push(user);
    uClear();
    localStorage.setItem("users", JSON.stringify(uContainer));
    window.location.href = "signupComplete.html"
}



function uClear() {
    uFName.value = "";
    uLName.value = "";
    uEmail.value = "";
    uPass.value = "";
    uPassConfirm.value = "";
}


function nameFValidation() {
    var uInput = uFName.value;
    var regix = /[A-Z][a-z]{1,20}/;

    if (regix.test(uInput)) {
        uFName.classList.add("is-valid")
        uFName.classList.remove("is-invalid")
        error1.classList.replace("d-flex", "d-none")
        return true;
    }
    else {
        uFName.classList.add("is-invalid")
        regBtn.setAttribute("disabled", "disabled")
        error1.classList.replace("d-none", "d-flex")
        document.getElementById("checkBox").checked = false;
        return false;
    }
}

function nameLValidation() {
    var uInput = uLName.value;
    var regix = /^[A-Z][a-z]{1,8}/;

    if (regix.test(uInput)) {
        uLName.classList.add("is-valid")
        uLName.classList.remove("is-invalid")
        error2.classList.replace("d-flex", "d-none")
        return true;
    }
    else {
        uLName.classList.add("is-invalid")
        regBtn.setAttribute("disabled", "disabled")
        error2.classList.replace("d-none", "d-flex")
        document.getElementById("checkBox").checked = false;
        return false;
    }

}


function emailValidation() {
    var uInput = uEmail.value;
    var regix = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regix.test(uInput)) {
        uEmail.classList.add("is-valid")
        uEmail.classList.remove("is-invalid")
        error3.classList.replace("d-flex", "d-none")
        return true;
    }
    else {
        uEmail.classList.add("is-invalid")
        regBtn.setAttribute("disabled", "disabled")
        error3.classList.replace("d-none", "d-flex")
        document.getElementById("checkBox").checked = false;
        return false;
    }

}


// function emailRepeat() {
//     for (var i = 0; i < uContainer.length; i++) {
//         console.log(uContainer[i].email.toLowerCase() ,uEmail.value.toLowerCase() )
//         if (localStorage.getItem("users") == null) {
//             error4.classList.replace("d-flex", "d-none")
//             uEmail.classList.add("is-valid")
//             return true;
//         }
//         else if(uEmail.value.toLowerCase() == uContainer[i].email.toLowerCase())
//         {
//             error4.classList.replace("d-none", "d-flex")
//             uEmail.classList.add("is-invalid")
//             uEmail.classList.remove("is-valid")
//             regBtn.setAttribute("disabled", "disabled")
//             document.getElementById("checkBox").checked = false;
//             return false;
//         }
//         else{
//             error4.classList.replace("d-flex", "d-none")
//             uEmail.classList.add("is-valid")
//             return true;
//         }
//     }
// }




function emailRepeat() {
    for (var i = 0; i < uContainer.length; i++) {
        if(uEmail.value.toLowerCase().includes(uContainer[i].email.toLowerCase()))
        {
            error4.classList.replace("d-none", "d-flex")
            uEmail.classList.add("is-invalid")
            uEmail.classList.remove("is-valid")
            regBtn.setAttribute("disabled", "disabled")
            document.getElementById("checkBox").checked = false;
            return false;
        }
        else{
            error4.classList.replace("d-flex", "d-none")
            uEmail.classList.add("is-valid")
            return true;
        }
    }
}

function passValidation() {
    var uInput = uPass.value;
    var regix = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (regix.test(uInput)) {
        uPass.classList.add("is-valid")
        uPass.classList.remove("is-invalid")
        error5.classList.replace("d-flex", "d-none")
        return true;
    }
    else {
        uPass.classList.add("is-invalid")
        regBtn.setAttribute("disabled", "disabled")
        error5.classList.replace("d-none", "d-flex")
        document.getElementById("checkBox").checked = false;
        return false;
    }

}

function passConfirmValid() {

    if (uPassConfirm.value === uPass.value) {
        uPassConfirm.classList.add("is-valid")
        uPassConfirm.classList.remove("is-invalid")
        error6.classList.replace("d-flex", "d-none")
        return true;
    }
    else {
        uPassConfirm.classList.add("is-invalid")
        regBtn.setAttribute("disabled", "disabled")
        error6.classList.replace("d-none", "d-flex")
        document.getElementById("checkBox").checked = false;
        return false;
    }

}

function validation() {
    if (nameFValidation() && nameLValidation() && emailValidation() && passValidation() && passConfirmValid() && emailRepeat()) {
        regBtn.removeAttribute("disabled")
    }
    else {
        regBtn.setAttribute("disabled", "disabled")
    }
}




function isDisabled() {
    disabledButton = emailValid && nameValid && passValid
}



uFName.addEventListener("blur", nameFValidation)

uLName.addEventListener("blur", nameLValidation)

uEmail.addEventListener("blur", emailValidation)

uEmail.addEventListener("blur", emailRepeat)

uPass.addEventListener("blur", passValidation)

uPassConfirm.addEventListener("blur", passConfirmValid)

checkBox.addEventListener("change", validation)
