import { type connection as WebSocketConnection } from 'websocket';
import { type Connection as WrapperConnection } from '@/websocket/wrapper';

export const adapterWebsocket = (connection: WebSocketConnection): WrapperConnection => {
  return {
    onMessage: (callback: (data: string) => void) => {
      connection.on('message', (data) => {
        if (data.type === 'utf8') {
          callback(data.utf8Data);
        }
      });
    },
    send: (data: string) => {
      return new Promise((resolve, reject) => {
        connection.sendUTF(data, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    },
  };
};
