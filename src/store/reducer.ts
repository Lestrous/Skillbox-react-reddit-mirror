import { ActionCreator, Reducer } from 'redux';
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './me/actions';
import { meReducer, TMeActions, TMeState } from './me/reducer';
import { SET_TOKEN } from './token/actions';
import { tokenReducer, TTokenActions, TTokenState } from './token/reducer';

export type TRootState = {
  commentText: string;
  token: TTokenState;
  me: TMeState;
};

const initialState: TRootState = {
  commentText: 'Hello there!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

type TUpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
};

export const updateComment: ActionCreator<TUpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

type MyAction = TUpdateCommentAction | TTokenActions | TMeActions;

export const rootReducer: Reducer<TRootState, MyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    default:
      return state;
  }
};
