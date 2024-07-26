export interface User {
    id: string;
    username: string;
    avatar?: string;
    isAdmin?: boolean;
    isVerified?: boolean;
}

export interface UserSchema {
    user: User;
}
