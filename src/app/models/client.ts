export class Client {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public document: string,
        public phone: string,
        public address: string,
        public email?: string,
    ){}
}

/*export interface Type_document{
    value: string;
    name: string;
}

export interface Hadware{
    id: string;
    model: string;
    name:string;
    details:string;
}*/
