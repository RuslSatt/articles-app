import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/login';
import { ProfileSchema } from '@/entities/profile';
import { ArticleSchema } from '@/entities/article';
import { IArticleCommentsSchema } from '@/pages/ArticleDetailPage';
import { IAddCommentFormSchema } from '@/features/addComment';
import { IArticlePageSchema } from '@/pages/ArticlesPage';

export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleSchema;
    articleDetailComments?: IArticleCommentsSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
    state: StateSchema;
}
