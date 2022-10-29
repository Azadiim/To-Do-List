let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("#add-form input");
let addBtn = document.querySelector("#add-form button");
let SearchInput = document.querySelector("#search-form input");

list.addEventListener("click", (e) => {
  if (e.target.nodeName == "SPAN" && e.target.className == "delete-btn") {
    e.target.parentNode.remove();
    if (list.children.length == 0) {
      let listEmptyMsg = document.createElement("div");
      listEmptyMsg.innerText = "No remaining items";
      listEmptyMsg.style.color = "#333";
      listEmptyMsg.style.textAlign = "center";
      listEmptyMsg.id = "emptyMsg";
      list.appendChild(listEmptyMsg);
    }
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!addInput.value) {
    return;
  }

  if (document.querySelector("#emptyMsg")) {
    document.querySelector("#emptyMsg").remove();
  }
  list.appendChild(createListItem(addInput.value));
  addInput.value = "";
});

SearchInput.addEventListener("input", (e) => {
  Array.from(list.children).forEach((element) => {
    if (document.querySelector("#emptyMsg")) {
      return;
    }
    if (
      element
        .querySelector(".title")
        .innerText.toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
});

function createListItem(itemValue) {
  let item = document.createElement("li");
  let titleSpan = document.createElement("span");
  let deleteBtnSpan = document.createElement("span");
  item.className = "to-do-item";
  titleSpan.className = "title";
  titleSpan.innerText = itemValue;
  deleteBtnSpan.className = "delete-btn";
  deleteBtnSpan.innerText = "delete";
  item.appendChild(titleSpan);
  item.appendChild(deleteBtnSpan);
  return item;
}
