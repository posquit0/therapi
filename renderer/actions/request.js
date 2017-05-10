export const SEND_REQUEST = 'SEND_REQUEST';
export const CANCEL_REQUEST = 'CANCEL_REQUEST';
export const CHANGE_REQUEST_URL = 'CHANGE_REQUEST_URL';

export function sendRequest() {
  return {
    type: SEND_REQUEST,
    meta: {
      throttle: 600
    }
  };
}

export function cancelRequest() {
  return {
    type: CANCEL_REQUEST
  };
}

export function changeRequestUrl(url) {
  return {
    type: CHANGE_REQUEST_URL,
    payload: {
      url
    },
    meta: {
      debounce: 400
    }
  };
}
