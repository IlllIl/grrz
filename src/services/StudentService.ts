import store from "../store";
import Student from "@/models/Student";

class StudentService {
    private students: (Student)[];

    constructor(){
        this.students = store.state.students;
    }

    getAll(): Student[]{
        return this.students;
    }

    getById(id: String): Student | undefined{
        return this.students.find(value => value.id === id);
    }

    add(student: Student){
        this.students.push(student)
    }
}

export default new StudentService();