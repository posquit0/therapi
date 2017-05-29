export const ADD_HISTORY = 'ADD_HISTORY';

export function addHistory(item) {
  return {
    type: ADD_HISTORY,
    payload: item
  };
}
