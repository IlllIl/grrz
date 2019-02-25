import {Subject} from "rxjs";
import Todo from "@/models/Todo";

class TodoService {
    data : Subject<any>;


    constructor(){
        this.data = new Subject();
    }

    create(): Todo {
        return new Todo({task: "", isDone: false});
    }

}

export default new TodoService();