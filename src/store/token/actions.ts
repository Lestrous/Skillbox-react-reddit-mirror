import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TRootState } from '../reducer';

export const SET_TOKEN = 'SET_TOKEN';

export type TSetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
};

export const setToken: ActionCreator<TSetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
});

export const saveToken =
  (): ThunkAction<void, TRootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    const token = window.__token__ || localStorage.getItem('token');

    if (token) {
      dispatch(setToken(token));
      localStorage.setItem('token', token);
    }
  };
