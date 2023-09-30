//Paso 2
function loadTasks() {
  // Obtengo la lista
  const taskList = document.getElementById('taskList');
  
  // Limpio la lista existente
  taskList.innerHTML = '';

  // Obtengo las tareas almacenadas en el Local Storage
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Recorro las tareas con forEach y las agrego a la lista
  storedTasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', removeTask); // Agrego evento click para eliminar tarea
    taskList.appendChild(li);
  });
}

//Paso 3: evento de carga
window.addEventListener('load', loadTasks);

//Paso 4
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', removeTask);
    taskList.appendChild(li);
    taskInput.value = '';
    updateLocalStorage();
  }
}

//Paso 5: evento click en el botón
const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', addTask);


//Paso 6: evento al hacer enter
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

//Paso 7: función updateLocalStorage
function updateLocalStorage() {
  const tasks = Array.from(document.querySelectorAll('#taskList li')).map(li => li.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
