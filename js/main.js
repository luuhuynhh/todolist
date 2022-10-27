import { Task } from "./models/task.js";
import { TaskList } from "./models/tasklist.js";

const taskList = new TaskList();

taskList.renderTodo("#todo", "todo");
taskList.renderTodo("#completed", "completed");

window.delTask = (id) => {
    taskList.deleteTask(id);
    taskList.renderTodo("#todo", "todo");
    taskList.renderTodo("#completed", "completed");
    taskList.save();
}

window.changeStatus = (id) => {
    let task = taskList.list.filter(i => i.id == id)[0];
    if (task) {
        task.status = "completed";
    }
    taskList.renderTodo("#todo", "todo");
    taskList.renderTodo("#completed", "completed");
    taskList.save();
}

window.sortAsc = () => {
    taskList.list.sort(function (a, b) {
        if (b.name.toLowerCase() < a.name.toLowerCase()) return 1;
        else return -1;
    });
    taskList.renderTodo("#todo", "todo");
    taskList.renderTodo("#completed", "completed");
    taskList.save();
}

window.sortDesc = () => {
    taskList.list.sort(function (a, b) {
        if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
        else return -1;
    });
    taskList.renderTodo("#todo", "todo");
    taskList.renderTodo("#completed", "completed");
    taskList.save();
}

const btnAddItem = document.querySelector("#addItem");
btnAddItem.onclick = function () {
    let content = document.querySelector("#newTask").value;
    if (content.trim() != '') {
        const task = new Task(content);
        taskList.addTask(task);

        document.querySelector("#newTask").value = '';
        document.querySelector("#newTask").focus();
        taskList.save();
        taskList.renderTodo("#todo", "todo");
        taskList.renderTodo("#completed", "completed");
    } else alert("Nhập công việc");
};

