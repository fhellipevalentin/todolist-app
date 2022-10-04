export class Tasks {
    id!: number;
    author: string;
    title: string;
    created_At: string;
    expiration!: Date;
    status: false;
    desc: string;

    constructor(author: string, title: string, desc: string, created_At: string, status: false) {
        this.author = author;
        this.title = title;
        this.desc = desc;
        this.created_At = created_At;
        this.status = status;
    }
}