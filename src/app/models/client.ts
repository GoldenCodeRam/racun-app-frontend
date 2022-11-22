import { ClientAccount } from "./clientAccount";

export class Client {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public document: string,
        public phone: string,
        public address: string,
        public clientAccount?: ClientAccount,
        public email?: string
    ) {}
}
