export interface Err {
    name: string;
    status?: number;
    message: string
}

export interface Res {
    status: Function;
    json: Function
}