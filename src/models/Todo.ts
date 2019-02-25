import ITodo from "@/interfaces/IToDo";

export default class Todo implements ITodo{
    task: string;
    isDone: boolean;
    piece!: string;
    creationDate: Date;

    constructor(raw : ITodo) {
        this.task = raw.task;
        this.isDone = raw.isDone;
        this.creationDate = new Date();
    }

    toString(): string{
        let res = this.task;
        if(this.piece){
            res += this.piece.toString();
        }
        return res;
    }

    done(): void{
        this.isDone = true;
    }

}