import { User } from "./user";

export type Action = {
    id: number;
    method: string;
    url: string;
    date: Date;
    user: User;
};
