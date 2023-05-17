
const inputBOX = document.getElementById("input-box")
const myList = document.getElementById("list-container")


function addButton(){
    if(inputBOX.value === '')
        alert("add your Task")
    else{
            let list = document.createElement('li')//create html element li
            list.innerHTML = inputBOX.value; //what will be displayed(text)
            myList.appendChild(list) //where will be displayed

            let del = document.createElement('span')
            del.innerHTML = "\u00d7"
            list.appendChild(del)//where to display del

}
    inputBOX.value = "";
}
myList.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    } 
}, false);