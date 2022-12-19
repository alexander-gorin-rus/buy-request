import { takeEvery, all } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import i18next from '../../../i18next';
import { MessageTypes } from '../../../utils/constants';

const checkActions = (action: any) => action.type && (
  action.type.includes(MessageTypes.FAILURE)
  || action.type.includes(MessageTypes.SUCCESS)
  || action.type.includes(MessageTypes.WARN)
  || action.type.includes(MessageTypes.INFO)
);

const showToast = (action: any) => {
  const message = get(action, 'payload.message', null);
  if (!message) return;
  switch (message.type) {
    case MessageTypes.WARN:
      toast.warn(i18next.t(message.text));
      break;
    case MessageTypes.INFO:
      toast.info(i18next.t(message.text));
      break;
    case MessageTypes.SUCCESS:
      toast.success(i18next.t(message.text));
      break;
    case MessageTypes.FAILURE:
    default:
      toast.error(i18next.t(message.text));
      break;
  }
};

export default function* allActionsListener() {
  yield all([
    takeEvery(checkActions, showToast),
  ]);
}
