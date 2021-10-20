const body = document.querySelector("body");
const listTitle = document.createElement("h1");

listTitle.innerHTML = "Todo List";
body.append(listTitle);

const UlList = document.createElement("ul");
UlList.id = UlList;
body.append(UlList);

const input = document.createElement("input");
input.id = "input";
body.append(input);

const addButton = document.createElement("button");
addButton.id = "addButton";
addButton.textContent = "Add";
body.append(addButton);

const toDos = ["wake up", "eat breakfast", "code"];

const renderList = () => {
  UlList.innerHTML = "";
  for (i = 0; i < toDos.length; i++) {
    const itemsList = document.createElement("li");
    itemsList.innerHTML = toDos[i];
    UlList.append(itemsList);

    //delbutton
    const button = document.createElement("button");
    button.id = "button";
    button.innerHTML = "Delete";
    UlList.append(button);
  }
};
renderList();

// add input & button
addButton.addEventListener(
  "click",
  (addToList = () => {
    if (input.value.length) {
      toDos.push(input.value);
      renderList(addToList);
    }
  })
);

/*
// add delete function
button.addEventListener(
  "click",
  (deleteListItem = () => {
    //when click dele button > li deleted
    toDos.splice(i, 1);
    renderList(addToList);
  })
);
*/