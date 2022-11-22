export type Contract = {
    id: number;
    clientAccountId: number;
    dateEnd?: Date;
    dateStart: Date;
    placeId: number;
    serviceId: number;
    status: boolean;
    value: number;
};
