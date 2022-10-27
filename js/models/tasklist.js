export class TaskList {
    list = [];

    constructor() {
        this.list = [];
        this.get();
    }

    addTask(newTask) {
        this.list.push(newTask);
        this.save();
    }

    deleteTask(id) {
        this.list = this.list.filter(task => task.id != id);
    }

    save() {
        localStorage.setItem('myTask', JSON.stringify(this.list));
    }

    get() {
        this.list = JSON.parse(localStorage.getItem('myTask')) || [];
    }

    renderTodo(selector, status) {
        const todos = this.list.filter(task => task.status === status);

        let contentTodo = todos.reduce((contentTodo, task) => {
            let color = "color:green;";
            if (status === "todo") color = "";
            return contentTodo +=
                `<li class="task">${task.name}
                <div class="buttons">
                    <i onclick="delTask('${task.id}')" class="fa fa-trash-o remove" aria-hidden="true"></i>
                    <i onclick="changeStatus('${task.id}')" style="${color}" class="fa fa-check-circle-o complete" aria-hidden="true"></i>
                </div>
            </li>`
        }, '')
        document.querySelector(selector).innerHTML = contentTodo;
    }
}