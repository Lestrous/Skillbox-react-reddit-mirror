import { SET_TOKEN, TSetTokenAction } from './actions';
import { Reducer } from 'react';

export type TTokenState = string;

export type TTokenActions = TSetTokenAction;

export const tokenReducer: Reducer<TTokenState, TTokenActions> = (
  state,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
};
