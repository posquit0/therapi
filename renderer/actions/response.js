export const SET_RESPONSE = 'SET_RESPONSE';

export function setResponse(response) {
  console.log(response);
  console.log(response.statusText);
  return {
    type: SET_RESPONSE,
    payload: {
      response
    }
  };
}
