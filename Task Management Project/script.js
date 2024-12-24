let tasksArray = [];
const firstInput = document.getElementById("firstInput");
const submitButton = document.getElementById("firstButton");
const listItems = document.getElementById("tasksList");
submitButton.addEventListener("click", ()=>{
    const inputValue = firstInput.value.trim()
    if (inputValue.length > 0) {
        tasksArray.push(inputValue)

    }
    else {
        alert("Error! Pleae enter task name");
    }
    const item = document.createElement("li"); // equals : <li></li>
    const content = document.createElement("span"); // equals : <span></span>
    content.textContent = inputValue; // equals : <span>(((content)))</span>
    item.appendChild(content); // <li>  <span>(((content)))</span>  </li>
    listItems.appendChild(item); // <ul>  (<li><span>(((content)))</span></li>)  </ul>
});

