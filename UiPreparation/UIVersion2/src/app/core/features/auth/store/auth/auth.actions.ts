import {createAction, props} from '@ngrx/store';
import {AuthUser} from '../../models/authUser';

export const setAuthUser = createAction(
  '[Auth] Set Auth User',
  props<{authUser: AuthUser}>()
);
export const deleteAuthUser = createAction('[Auth] Delete Auth User');
