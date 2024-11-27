import { IProfile } from '@/entities/profile';
import { ValidateProfileError } from '../../types/editableProfileCard';

export function validateProfileData(data: IProfile) {
    const errors: ValidateProfileError[] = [];

    if (!data.first || !data.first.length) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!data.age || !data.age) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!data.country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    if (!data.city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    return errors;
}
