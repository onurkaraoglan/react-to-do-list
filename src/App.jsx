import React, { useEffect } from 'react';
import Form from "./components/Form"
import TaskBoard from "./components/TaskBoard"
import './App.css';

const App = () => {

  useEffect(() => {
    // load every event in the page
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);

    // subit data function
    function submit(e) {
      e.preventDefault();
      let input = document.querySelector('input');
      if (input.value !== '')
        addTask(input.value);
      input.value = '';
    }

    // add tasks
    function addTask(task) {
      let ul = document.querySelector('ul');
      let li = document.createElement('li');
      li.innerHTML = `<span class="delete">×</span><input type="checkbox" class="cbox"><label>${task}</label>`;
      ul.appendChild(li);
      document.querySelector('.tasksBoard').style.display = 'block';
    }

    // clear the LIST
    function clearList(e) {
      document.querySelector('.tasksBoard').style.display = 'none';
    }

    // deleteTick
    function deleteOrTick(e) {
      if (e.target.className === 'delete')
        deleteTask(e);
      else {
        tickTask(e);
      }
    }

    // delete task
    function deleteTask(e) {
      let remove = e.target.parentNode;
      let parentNode = remove.parentNode;
      parentNode.removeChild(remove);
      let count = document.getElementsByTagName('li').length;
      if (count === 0)
        document.querySelector('.tasksBoard').style.display = 'none';
    }

    // tick a task
    function tickTask(e) {
      const task = e.target.nextSibling;
      if (e.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "#d3d3d3";
        task.style.transition = "all .5s";
      } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
      }
    }

  }, [])

  return (
    <div className="App">
      <div className="main">
        <h1>TO DO LIST</h1>
        <Form />
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
