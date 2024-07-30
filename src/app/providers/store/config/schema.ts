import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/feature/login';

export interface StateSchema {
    user: UserSchema;
    login: LoginSchema;
}
