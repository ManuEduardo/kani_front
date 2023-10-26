export interface User{
    name: string;
    days_on_app : number;
    phone_number:string;
}

export const EmptyUser: User = {
    name: "Lucia",
    days_on_app: 2,
    phone_number: "",
}