export const SEND_REQUEST = 'SEND_REQUEST';
export const CANCEL_REQUEST = 'CANCEL_REQUEST';

export function sendRequest() {
  return {
    type: SEND_REQUEST
  };
}

export function cancelRequest() {
  return {
    type: CANCEL_REQUEST
  };
}
