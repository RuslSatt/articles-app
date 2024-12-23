import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/login';
import { ArticleSchema } from '@/entities/article';
import { IAddCommentFormSchema } from '@/features/addComment';
import { IArticlePageSchema } from '@/pages/ArticlesPage';
import { ISaveScrollSchema } from '@/features/saveScroll';
import { IArticleDetailsPageSchema } from '@/pages/ArticleDetailPage';
import { rtkApi } from '@/shared/api/rtk';
import { ProfileSchema } from '@/features/editableProfile';

export interface StateSchema {
    user: UserSchema;
    saveScroll: ISaveScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleSchema;
    articleDetailsPage?: IArticleDetailsPageSchema;
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
