export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    isAdmin?: boolean;
    isVerified?: boolean;
    roles?: UserRole[];
}

export interface UserSchema {
    user?: User;
    _mounted?: boolean;
}
