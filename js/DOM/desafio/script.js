function save() {
  const number = document.querySelector("input[name='number']").value
  const district = document.querySelector("input[name='district']").value
  const city = document.querySelector("input[name='number']").value
  const area = document.querySelector("input[name='area']").value

  let newList = document.createElement("li");
  newList.innerText = `${area} m², numero ${number} (${district} - ${city})`;

  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Excluir";
  removeButton.setAttribute("onclick", "removeHouse(this)");

  newList.appendChild(removeButton);

  document.getElementById("house-list").appendChild(newList);
}

function removeHouse(button) {
  let liToRemove = button.parentNode;
  document.getElementById("house-list").removeChild(liToRemove);
}