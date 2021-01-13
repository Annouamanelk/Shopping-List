var ul = document.getElementsByTagName("ul")
var addbtn = document.getElementById("add-btn")
var updatebtn = document.getElementById("update-btn")
var removebtn = document.getElementById("remove-btn")
var inp = document.getElementById("input")

function createNewLi() {
    var newLi = document.createElement("li")
    var li = document.getElementsByTagName("li")
    var length = li.length
    var text = document.createTextNode(inp.value)
    newLi.id = length + 1
    newLi.appendChild(text)
    var newDiv = document.createElement("div")
    newDiv.id = "bin" +(length + 1)
    newDiv.classList.add("bin")
    newLi.appendChild(newDiv)
    newDiv.addEventListener("click", function(e){
        var clicked = e.target.id
        var ulchilds = ul[0].children
        var id = clicked.substring(3)
        ul[0].removeChild(ulchilds[id-1])
        var counter = 0
        for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
            var newId = counter + 1
            ulchilds[i].id = newId
            ulchilds[i].children[0].id = "bin"+newId
            counter++
        }
    })   
    return newLi;
}

//console.log(ul[0].childElementCount)
function addLi() {
    var ulchilds = ul[0].children
    var len = ulchilds.length
    if (inp.value == "") alert("Please write an Item to add !")
    else {
        for (var i = 0; i < len; i++) {
            if ((inp.value).toLowerCase() == (ulchilds[i].innerText).toLowerCase()) {
                alert("Already noted ;)")
                ulchilds[i].style.backgroundColor = "green"
                setTimeout(() => {
                    ulchilds[i].style.backgroundColor = "white"
                }, 200);
                return;
            }
        }
        var newLi = createNewLi();
        ul[0].appendChild(newLi)
        inp.value = ""
        //ul[0].insertBefore(newLi, ul[0].firstElementChild)
    }
}
function updateL1() {
    var ulchilds = ul[0].children
    var len = ulchilds.length
    if(len==0) alert("No 1st Item to update !")
    else if (inp.value == "") alert("Please write the new 1st Item !")
    else {
        for (var i = 0; i < len; i++) {
            if ((inp.value).toLowerCase() == (ulchilds[i].innerText).toLowerCase()) {
                alert("Already noted ;)")
                ulchilds[i].style.backgroundColor = "green"
                setTimeout(() => {
                    ulchilds[i].style.backgroundColor = "white"
                }, 200);
                return;
            }
        }
        var newLi = createNewLi();
        newLi.id = "1"
        var firstLi = ul[0].firstElementChild
        ul[0].replaceChild(newLi, firstLi)
        inp.value = ""
        //ul[0].insertBefore(newLi, ul[0].firstElementChild)
    }
}
function removeL1() {
    var ulchilds = ul[0].children
    var len = ulchilds.length
    if(len==0) alert("No 1st Item to remove !")
    else {
        var firstLi = ul[0].firstElementChild
        ul[0].removeChild(firstLi)
        var counter = 0
        for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
            var newId = counter + 1
            ulchilds[i].id = newId
            ulchilds[i].children[0].id = "bin"+newId
            counter++
        }
    }
}
addbtn.addEventListener('click', addLi)    
updatebtn.addEventListener('click', updateL1)
removebtn.addEventListener('click', removeL1)
inp.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) addLi()
})





