export const fetchPhonesPending = () => ({
  type: 'FETCH_PHONES_PENDING',
});

export const fetchPhonesSuccess = (phones) => ({
  type: 'FETCH_PHONES_SUCCESS',
  phones,
});

export const fetchPhonesError = (error) => ({
  type: 'FETCH_PHONES_ERROR',
  error,
});