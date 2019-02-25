import {v4 as uuid} from 'uuid';
import createLogger from "vuex/dist/logger";
import IToDo from "@/interfaces/IToDo";
import Todo from "@/models/Todo";

export class Student {
    readonly id: string;
    grade: number;
    bday: Date;
    name: string;
    todos: Todo[];
    constructor(name: string, bday: Date, grade: number,
                todos: Array<IToDo>) {
        this.name = name;
        this.bday = bday;
        this.grade = grade;
        this.todos = todos.map(value => new Todo(value));
        this.id = uuid();
    }

    get age(): number {
        if (this.bday) {
            let diff_ms = Date.now() - this.bday.getTime();
            let age_dt = new Date(diff_ms);

            return Math.abs(age_dt.getUTCFullYear() - 1970);
        } else {
            return -1;
        }
    }

    get bdayString(): string {
       let  month = '' + (this.bday.getMonth() + 1),
            day = '' + this.bday.getDate(),
            year = this.bday.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    set bdayString(bday: string) {
        this.bday = new Date(bday)
    }

}

export default Student;