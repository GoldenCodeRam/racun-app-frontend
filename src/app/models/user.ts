import { Role } from "./role";

export type User = {
    id: number,
    role: Role,
    firstName: string;
    lastName: string;
    email: string;
};
