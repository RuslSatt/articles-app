import { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateSchema } from '@/app/providers/store';
import { api } from '@/shared/api/base';

jest.mock('@/shared/api/base');

const axiosMock = api as jest.Mocked<typeof api>;

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg?: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.Mocked<AxiosInstance>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>
    ) {
        this.dispatch = jest.fn();
        this.getState = jest.fn().mockReturnValue(state);
        this.actionCreator = actionCreator;

        this.api = axiosMock;
    }

    async callThunk(arg?: Arg) {
        const thunk = this.actionCreator(arg);
        const action = await thunk(this.dispatch, this.getState, { api: this.api });
        return action;
    }
}
