export const SET_DATA = 0;

export const setData = (payload) => ({
  type: SET_DATA,
  payload: { data: payload }
});

export const setErrorMessage = (payload) => ({
  type: SET_DATA,
  payload: { errorMessage: payload }
});
