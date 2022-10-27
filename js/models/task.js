export class Task {
    static availableNextId = 1;
    id = Task.availableNextId++;
    name = '';
    status = '';
    constructor(name, status = "todo") {
        this.name = name;
        this.status = status;
    }
}