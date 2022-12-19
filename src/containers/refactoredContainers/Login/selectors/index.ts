import { AppState } from 'src/core/reducers';

export const getCaptchaSelector = (state: AppState) => state.login;
