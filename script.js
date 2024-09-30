let todos = [
  { id: 1, title: "Go to gym" },
  { id: 2, title: "Clean the car" }
];

function addTodo() {
  const input = document.querySelector("input");
  const newTodo = {
    id: todos.length + 1,  // Assign an incremental id
    title: input.value
  };

  if (newTodo.title.trim()) {
    todos.push(newTodo);
    input.value = '';  // Clear the input field after adding
    render();
  } else {
    alert("Please enter a valid todo");
  }
}

function delTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function editTodo(id) {
  const todoToEdit = todos.find(todo => todo.id === id);
  const newTitle = prompt("Edit your todo:", todoToEdit.title);

  if (newTitle.trim()) {
    todoToEdit.title = newTitle;
    render();
  } else {
    alert("Please enter a valid title");
  }
}

function render() {
  const todoList = document.getElementById('root');
  todoList.innerHTML = '';  // Clear the list

  todos.forEach(todo => {
    const div = document.createElement('div');
    const h1 = document.createElement('h4');
    h1.textContent = todo.title;

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group'); // Add button group class

    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    delBtn.textContent = "Delete";
    editBtn.classList.add('edit-button');
    delBtn.classList.add('delete-button');

    editBtn.onclick = () => editTodo(todo.id);
    delBtn.onclick = () => delTodo(todo.id);

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(delBtn);

    div.appendChild(h1);
    div.appendChild(buttonGroup);
    div.setAttribute('data-id', todo.id);
    todoList.appendChild(div);
  });
}

// Initial rendering of todos
render();
