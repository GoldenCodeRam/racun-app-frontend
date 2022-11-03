export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    document: string;
    phone: string;
    address: string;
    email?: string;
}

export interface Type_document{
    value: string;
    name: string;
}

export interface Hadware{
    id: string;
    model: string;
    name:string;
    details:string;
}