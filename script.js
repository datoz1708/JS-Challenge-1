function addTask() {
    let taskText = document.getElementById('new-task').value;
    
    if (taskText === '') return;
    
    let li = document.createElement('li');
    li.className = 'task-item';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    let span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'task-content';

    let saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    saveBtn.style.display = 'none';

    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    editInput.style.display = 'none';

    span.onclick = function() {
        span.style.display = 'none';
        editInput.style.display = 'inline-block';
        editInput.value = span.textContent;
        saveBtn.style.display = 'inline-block';
    };

    saveBtn.onclick = function() {
        span.textContent = editInput.value;
        span.style.display = 'inline-block';
        editInput.style.display = 'none';
        saveBtn.style.display = 'none';
    };

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    let buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';
    buttonGroup.appendChild(saveBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editInput);
    li.appendChild(buttonGroup);

    document.getElementById('todo-list').appendChild(li);

    document.getElementById('new-task').value = '';
}

document.getElementById('add-btn').addEventListener('click', addTask);
