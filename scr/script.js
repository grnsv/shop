function deleteItem() {
  let parent = this.parentElement;
  if (parent.tagName == "TD") {
    parent = parent.parentElement;
  }
  parent.remove(); //only from html
};

document.addEventListener("DOMContentLoaded", () => {
  let deleteButtons = document.getElementsByClassName('delete-item');
  for (let btn of deleteButtons) {
    btn.onclick = deleteItem;
  };
});