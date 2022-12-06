import { ClientAccount } from "./clientAccount";
import { Zone } from "./zone";

export class Hardware {
    constructor(
        public id: number,
        public name: string,
        public model: string,
        public details: string
    ) {}
}

export class HardwareInfo {
    constructor(
        public name: string,
        public model: string,
        public details: string
    ) {}
}

export class HardwareOnZone {
    constructor(
        public id: number,
        public startDate: Date,
        public hardwareId: number,
        public zoneId: number,
        public hardware?: Hardware,
        public zone?: Zone
    ) {}
}

export class HardwareOnZonesInfo {
    constructor(public hardwareId: number, public zoneId: number) {}
}

export class HardwareOnClient {
    constructor(
        public id: number,
        public startDate: Date,
        public hardwareId: number,
        public clientAccountId: number,

        public hardware?: Hardware,
        public clientAccount?: ClientAccount
    ) {}
}

export class HardwareOnClientInfo {
    constructor(public hardwareId: number, public clientAccountId: number) {}
}
