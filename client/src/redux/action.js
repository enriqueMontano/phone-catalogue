export const FETCH_PHONES_PENDING = 'FETCH_PHONES_PENDING';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_ERROR = 'FETCH_PHONES_ERROR';

export const fetchPhonesPending = () => {
  return {
    type: FETCH_PHONES_PENDING,
  };
};

export const fetchPhonesSuccess = (phones) => {
  return {
    type: FETCH_PHONES_SUCCESS,
    payload: phones,
  };
};

export const fetchPhonesError = (error) => {
  return {
    type: FETCH_PHONES_ERROR,
    payload: error,
  };
};

export const fetchPhones = () => async (dispatch) => {
  dispatch(fetchPhonesPending());

  const phones = await fetch('http://localhost:5000/phones')
    .then((res) => res.json())
    .catch((error) => {
      dispatch(fetchPhonesError(error));
    });

  // dispatch(fetchPhonesSuccess(phones));

  setTimeout(() => dispatch(fetchPhonesSuccess(phones)), 2000);
};
