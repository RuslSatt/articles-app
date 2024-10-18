import { User } from '@/entities/user';

export interface IComment {
    id: string;
    text: string;
    user: User;
    taskId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
