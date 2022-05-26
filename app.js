// Define ui vars
const form =document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter =document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listenrs 
loadEventListeners();

//load all event listeners
function loadEventListeners(){
  //add task 
  form.addEventListener('submit', addtask);
  // remove task event 
  tasklist.addEventListener('click',removeTask);
  // clear task event
  clearBtn.addEventListener('click',clearTasks);
  //filter tasks
  filter.addEventListener('keyup', filterTasks);
}


//add task
function addtask(e){
  if(taskInput.value === ''){
    alert('Add a taks pls :)');
  }
  // create li eliment 
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  // create text node and append to li 
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element 
  const link = document.createElement('a');
  // add class 
  link.className = 'delete-item secondary-content'
  //add icon html
  link.innerHTML='<i class="fa fa-remove"></i>';
  //append the link to li 
  li.appendChild(link);

  // append li to ul 
  tasklist.appendChild(li);
  //clear input
  taskInput.value='';
  
  e.preventDefault();
}

//Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();
    }
  }
}

//clear tasks
function clearTasks(){
  //normal way
  // tasklist.innerHTML = '';
  
  //faster way 
  while(tasklist.firstChild){
    tasklist.removeChild(tasklist.firstChild);
  }
  
}

//filter tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item =task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}