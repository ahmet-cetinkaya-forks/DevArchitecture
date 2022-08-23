import {AuthStoreState, authStoreReducer} from './auth/auth.reducer';

export interface AuthStore {
  authStoreState: AuthStoreState;
}

export const authReducers = {
  authStoreState: authStoreReducer,
};
