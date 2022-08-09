import {AuthUser} from '@core/auth/models/authUser';
import {createAction, props} from '@ngrx/store';

export const setAuthUser = createAction(
  '[Auth] Set Auth User',
  props<{authUser: AuthUser}>()
);
export const deleteAuthUser = createAction('[Auth] Delete Auth User');
