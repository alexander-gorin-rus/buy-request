import { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import { toast } from 'react-toastify';

import { EmitSubscribe } from '../../../utils/constants';
import config from '../../../config';

export const useChat = (userIds: string[], currentUserId: string = '', dealId: string = '') => {
  const [messages, setMessages] = useState<any[]>([]);

  const [dialog, setDialog] = useState<any>(null);

  const [socket, setSocket] = useState<any>(null);

  const updateMessages = (res: any) => {
    setMessages((oldMessages) => [res.chatMessage, ...oldMessages]);
  };

  useEffect(() => {
    const newSocket = io(config.chatServiceSocketUrl, config.socketOptions);

    newSocket.on('connect', () => {
      newSocket.emit(EmitSubscribe.SERVER_DIALOG, { userIds, dealId });
    });

    newSocket.on('connect_error', (error: any) => {
      toast.error(error.message);
    });

    newSocket.on('error', (error: any) => {
      toast.error(error.message);
    });

    newSocket.on(EmitSubscribe.CLIENT_DIALOG, (serverDialog: any) => {
      if (serverDialog) {
        setDialog(serverDialog);
        setMessages(serverDialog.chatMessages.reverse());
      }
    });

    newSocket.on(EmitSubscribe.CLIENT_MESSAGE, updateMessages);

    setSocket(newSocket);

    return () => {
      setMessages([]);
      setDialog(null);
      if (newSocket.connected) {
        newSocket.disconnect();
      }
    };
  }, [userIds, currentUserId, dealId]);

  const sendMessage = useCallback((messageText: string, images?: string[]) => {
    if (socket && dialog?.dialogId && (messageText || images)) {
      socket.emit(EmitSubscribe.SERVER_MESSAGE, {
        dialogId: dialog.dialogId,
        text: messageText,
        images,
        userId: currentUserId,
      });
    }
  }, [dialog, dialog?.dialogId, socket]);

  return { messages, dialog, sendMessage };
};
