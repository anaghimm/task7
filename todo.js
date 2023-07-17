let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open");
}
function addTask(){
    if (inputbox1.value === '' || inputbox2.value === '' || inputbox3.value === '') {
        alert("You must fill all the details!");
      } else {
        const listContainer = document.getElementById("listcontainer");
        let li = document.createElement("li");
        li.textContent = inputbox1.value + ' ' + inputbox2.value + ' ' + inputbox3.value;
        li.addEventListener("click", deleteTask);
        listContainer.appendChild(li);
        closePopup();
      }
}
function closePopup(){
    popup.classList.remove("open");
}
const listContainer = document.getElementById("listcontainer");
const inputbox1 = document.getElementById("firstpart");
const inputbox2 = document.getElementById("secondpart");
const inputbox3 = document.getElementById("thirdpart");
const inputbox = [inputbox1, inputbox2, inputbox3];
function deleteTask(event) {
    event.target.remove();
  }