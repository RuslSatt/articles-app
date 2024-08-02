import { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state: DeepPartial<StateSchema>
    ) {
        this.dispatch = jest.fn();
        this.getState = jest.fn().mockReturnValue(state);
        this.actionCreator = actionCreator;
    }

    async callThunk(arg?: Arg) {
        const thunk = this.actionCreator(arg);
        const action = await thunk(this.dispatch, this.getState, undefined);
        return action;
    }
}
