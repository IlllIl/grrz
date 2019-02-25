import {v4 as uuid} from 'uuid';

export default class Work {

    id: string;
    name: string;
    author!: string;
    location!: string;
    tags!: string[];
    difficulty!: number;
    genre!: string;


    constructor(name: string) {
        this.id = uuid();
        this.name = name;
    }

}