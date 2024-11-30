import { IProfile } from '@/entities/profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
