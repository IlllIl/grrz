import store from "../store";
import Work from "@/models/Work";

class WorkService {
    private work: (Work)[];

    constructor(){
        this.work = store.state.works;
    }

    getAll(): Work[]{
        return this.work;
    }

    getById(id: String): Work | undefined{
        return this.work.find(value => value.id === id);
    }

    add(work: Work){
        this.work.push(work)
    }
}

export default new WorkService();