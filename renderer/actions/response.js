export const SET_RESPONSE = 'SET_RESPONSE';

export function setResponse(response) {
  return {
    type: SET_RESPONSE,
    payload: {
      response
    }
  };
}
