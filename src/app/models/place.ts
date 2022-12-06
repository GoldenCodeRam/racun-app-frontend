export type Place = {
    id: number;
    name: string;
    parentPlace?: {
        id: number;
        name: string;
    };
};
