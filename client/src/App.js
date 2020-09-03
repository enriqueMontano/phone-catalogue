import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhones } from './redux/action';

function App() {
  const phones = useSelector((state) => state.phones);
  const error = useSelector((state) => state.error);
  const pending = useSelector((state) => state.pending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhones());
  }, []);

  return (
    <div>
      {console.log(phones, error, pending)}
      <h2>PHONES LIST</h2>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>{phone.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
