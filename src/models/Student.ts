import {v4 as uuid} from 'uuid';
import IToDo from "@/interfaces/IToDo";
import Todo from "@/models/Todo";

export class Student {
    readonly id: string;
    grade: number;
    bday: Date;
    name: string;
    todos: Todo[];
    constructor(name: string, bday: Date, grade: number
                ) {
        this.id = uuid();
        this.name = name;
        this.bday = bday;
        this.grade = grade;
        this.todos=[];
    }

}

export default Student;