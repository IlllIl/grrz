import {v4 as uuid} from 'uuid';

export default class Work {

    id: string;
    title: string;
    author!: string;
    location!: string;
    tags!: string[];
    difficulty!: number;
    genre!: string;
    file!: any;

    constructor(name: string) {
        this.id = uuid();
        this.title = name;
    }

}