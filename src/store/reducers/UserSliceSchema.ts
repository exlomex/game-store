import {JwtPayload} from "jwt-decode";

export enum UserRoles {
    ADMIN =  'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

export interface UserSliceSchema {
    isAuth: boolean;
    role: UserRoles;
    searchIsOpen: boolean;
}

export interface tokenInfoTypes extends JwtPayload {
    id: number,
    username: string,
    role: UserRoles,
}


