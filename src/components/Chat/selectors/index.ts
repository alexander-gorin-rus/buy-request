import { AppState } from '../../../core/reducers';

export const getChatCompanionUserSelector = (state: AppState) => state.chatCompanionUser.user;
