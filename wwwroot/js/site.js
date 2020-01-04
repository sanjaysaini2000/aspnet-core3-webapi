const uri = "api/BookItems";
let books = [];

function getBookItems() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error("Unable to get books.", error));
}

function addBookItem() {
  const titleInputText = document.getElementById("add-title");
  const auhtorInputText = document.getElementById("add-author");
  const publisherInputText = document.getElementById("add-publisher");
  const genreInputText = document.getElementById("add-genre");
  const priceInputText = document.getElementById("add-price");

  const item = {
    title: titleInputText.value.trim(),
    author: auhtorInputText.value.trim(),
    publisher: publisherInputText.value.trim(),
    genre: genreInputText.value.trim(),
    price: parseInt(priceInputText.value.trim())
  };
  console.log(JSON.stringify(item));
  fetch(uri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(() => {
      getBookItems();
      titleInputText.value = "";
      auhtorInputText.value = "";
      publisherInputText.value = "";
      genreInputText.value = "";
      priceInputText.value = "";
    })
    .catch(error => console.error("Unable to add Book.", error));
}

function deleteBookItem() {
  const itemId = document.getElementById("delete-id").value.trim();
  fetch(`${uri}/${itemId}`, {
    method: "DELETE"
  })
    .then(() => getBookItems())
    .catch(error => console.error("Unable to delete Book.", error));

}

function displayDeleteForm(id) {
  const item = books.find(item => item.id === id);
  document.getElementById("delete-id").value = item.id;
}

function displayEditForm(id) {
  const item = books.find(item => item.id === id);
  document.getElementById("edit-id").value = item.id;
  document.getElementById("edit-title").value = item.title;
  document.getElementById("edit-author").value = item.author;
  document.getElementById("edit-publisher").value = item.publisher;
  document.getElementById("edit-genre").value = item.genre;
  document.getElementById("edit-price").value = item.price;
}

function updateBookItem() {
  const itemId = document.getElementById("edit-id").value.trim();
  const item = {
    id: parseInt(itemId, 10),
    title: document.getElementById("edit-title").value.trim(),
    author: document.getElementById("edit-author").value.trim(),
    publisher: document.getElementById("edit-publisher").value.trim(),
    genre: document.getElementById("edit-genre").value.trim(),
    price: parseInt(document.getElementById("edit-price").value.trim())
  };

  fetch(`${uri}/${itemId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
    .then(() => getBookItems())
    .catch(error => console.error("Unable to update item.", error));

  return false;
}

/*function closeInput() {
  document.getElementById("editForm").style.display = "none";
}

function _displayCount(bookCount) {
  const name = "No. of Books: ";

  document.getElementById("counter").innerText = `${name} ${bookCount}`;
}*/

function _displayItems(data) {
  const tBody = document.getElementById("books");
  tBody.innerHTML = "";

  //_displayCount(data.length);

  const button = document.createElement("button");

  data.forEach(item => {
    /* let editButton = button.cloneNode(false);
    editButton.innerText = "Edit";
    editButton.setAttribute("onclick", `displayEditForm(${item.id})`);

    let deleteButton = button.cloneNode(false);
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("onclick", `deleteBookItem(${item.id})`);
*/
    let editButton = document.createElement("a");
    editButton.href = "#editBookModal";
    editButton.className = "edit";
    editButton.setAttribute("onclick", `displayEditForm(${item.id})`);
    editButton.setAttribute("data-toggle", "modal");
    editButton.innerHTML =
      "<i class='material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i>";

    let deleteButton = document.createElement("a");
    deleteButton.href = "#deleteBookModal";
    deleteButton.className = "delete";
    deleteButton.setAttribute("onclick", `displayDeleteForm(${item.id})`);
    deleteButton.setAttribute("data-toggle", "modal");
    deleteButton.innerHTML =
      "<i class='material-icons' data-toggle='tooltip' title='Delete'>&#xE872;</i>";

    let tr = tBody.insertRow();

    let td1 = tr.insertCell(0);
    let textTitle = document.createTextNode(item.title);
    
    td1.appendChild(textTitle);

    let td2 = tr.insertCell(1);
    let textAuthor = document.createTextNode(item.author);
    td2.appendChild(textAuthor);

    let td3 = tr.insertCell(2);
    let textPublisher = document.createTextNode(item.publisher);
    td3.appendChild(textPublisher);

    let td4 = tr.insertCell(3);
    let textGenre = document.createTextNode(item.genre);
    td4.appendChild(textGenre);

    let td5 = tr.insertCell(4);
    let textPrice = document.createTextNode(item.price);
    td5.appendChild(textPrice);

    let td6 = tr.insertCell(5);
    td6.appendChild(editButton);

    //let td7 = tr.insertCell(6);
    td6.appendChild(deleteButton);
  });

  books = data;
}
