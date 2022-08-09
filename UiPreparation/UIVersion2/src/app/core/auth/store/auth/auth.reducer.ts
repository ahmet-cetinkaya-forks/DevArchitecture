import {AuthUser} from '@core/auth/models/authUser';
import {createReducer, on} from '@ngrx/store';

import {deleteAuthUser, setAuthUser} from './auth.actions';

export interface AuthStoreState {
  authUser?: AuthUser;
}

const initialAuthStoreState: AuthStoreState = {
  authUser: undefined,
};

export const authStoreReducer = createReducer(
  initialAuthStoreState,
  on(setAuthUser, (state, {authUser}) => ({
    ...state,
    authUser,
  })),
  on(deleteAuthUser, state => ({
    ...state,
    authUser: undefined,
  }))
);
