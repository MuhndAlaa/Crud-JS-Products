var pName = document.getElementById("pName");
var pPrice = document.getElementById("pPrice");
var pCatageory = document.getElementById("pCatageory");
var pDesc = document.getElementById("pDesc");
var divBtn = document.getElementById("divBtn");
var inputSearch = document.getElementById("inputSearch");
var pContainer = []
var nameDisplay = document.getElementById("navbarDropdown");

if (localStorage.getItem("login") == null) {
    login = []
} else {
    login =localStorage.getItem("login")
}



if (localStorage.getItem("products") == null) {
    pContainer = []
} else {
    pContainer = JSON.parse(localStorage.getItem("products"))
    pDisplay()
}



nameDisplay.innerHTML=`Hey, ${login}`;

function pAdd() {
    var product = {
        name: pName.value,
        price: pPrice.value,
        catageory: pCatageory.value,
        desc: pDesc.value
    }
    pContainer.push(product);
    clearform()
    localStorage.setItem("products", JSON.stringify(pContainer))
    pDisplay()


}

function clearform() {
    pName.value = "";
    pPrice.value = "";
    pCatageory.value = "";
    pDesc.value = "";
}


function pDisplay() {
    code = '';
    for (i = 0; i < pContainer.length; i++) {
        code += `
        <tr>
            <td>${i + 1}</td>
            <td>${pContainer[i].name}</td>
            <td>${pContainer[i].price}</td>
            <td>${pContainer[i].catageory}</td>
            <td>${pContainer[i].desc}</td>
            <td>
                <button class="btn btn-warning my-1" onclick="pModify(${i})">Modifey</button>
                <button class="btn btn-danger my-1" onclick="pDelete(${i})">Delete</button>
            </td>
        </tr>`
    }
    document.getElementById("pDisplay").innerHTML = code;
}


function pDelete(pIndex) {
    pContainer.splice(pIndex, 1)
    localStorage.setItem("products", JSON.stringify(pContainer))
    pDisplay();

}

function pModify(pIndex) {
    pName.value = pContainer[pIndex].name;
    pPrice.value = pContainer[pIndex].price;
    pCatageory.value = pContainer[pIndex].catageory;
    pDesc.value = pContainer[pIndex].desc;
    divBtn.innerHTML = `<button id="mainBtn" class="btn btn-warning" onclick="pUpdate(${pIndex})">UpDate Product</button>`
}


function pUpdate(pIndex) {
    pContainer[pIndex].name = pName.value;
    pContainer[pIndex].price = pPrice.value;
    pContainer[pIndex].catageory = pCatageory.value;
    pContainer[pIndex].desc = pDesc.value;
    localStorage.setItem("products", JSON.stringify(pContainer));
    pDisplay();
    clearform();
    divBtn.innerHTML = `<button id="mainBtn" class="btn btn-primary" onclick="pAdd()">Add Product</button>`

}


function pSearch(searchItem)
{
    code = '';
    for (i = 0; i < pContainer.length; i++) {
        if(pContainer[i].name.toLowerCase().includes(searchItem.toLowerCase()))
        code += `
        <tr>
            <td>${i + 1}</td>
            <td>${pContainer[i].name}</td>
            <td>${pContainer[i].price}</td>
            <td>${pContainer[i].catageory}</td>
            <td>${pContainer[i].desc}</td>
            <td>
                <button class="btn btn-warning my-1" onclick="pModify(${i})">Modifey</button>
                <button class="btn btn-danger my-1" onclick="pDelete(${i})">Delete</button>
            </td>
        </tr>`
    }
    document.getElementById("pDisplay").innerHTML = code;
}


inputSearch.addEventListener("keydown",function(){
    pSearch(this.value)
})
