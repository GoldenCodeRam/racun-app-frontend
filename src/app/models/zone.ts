import { Place } from "./place";

export class Zone {
    constructor(
        public id: number,
        public name: string,
        public code: number,
        public place: Place
    ) {}
}
