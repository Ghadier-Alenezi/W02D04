const body = document.querySelector("body");
const listTitle = document.createElement("h1");
listTitle.innerHTML = "Todo List";
body.append(listTitle);

const UlList = document.createElement("ul");
UlList.id = UlList;
body.append(UlList);

const toDos = ["wake up", "eat breakfast", "code"];

const renderList = () => {
  for (i = 0; i < toDos.length; i++) {
    const itemsList = document.createElement("li");
    itemsList.innerHTML = toDos[i];
    UlList.append(itemsList);
  }
};
renderList();

// add input & button
const addTodo = document.createElement("input");
addTodo.id = "addTodo";
body.append(addTodo);

const addButton = document.createElement("button");
addButton.id = "addButton";
addButton.textContent = "Add"
body.append(addButton);

const addToList = () => {
  const inputVal = document.getElementById(addTodo).value;
  inputVal.innerHTML = toDos.push(inputVal);
};

addButton.addEventListener('onclick', addToList);
