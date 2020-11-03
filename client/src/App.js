import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhones } from './redux/action';
import { PhonesList } from './components/PhonesList/PhonesList.component';
import { PhoneDetails } from './components/PhoneDetails/PhoneDetails.component';
import { ThemeProvider } from 'styled-components';
import theme from './resources/theme';
import './App.css';

function App() {
  const phones = useSelector((state) => state.phones);
  const error = useSelector((state) => state.error);
  const pending = useSelector((state) => state.pending);
  const dispatch = useDispatch();

  const [phone, setPhone] = useState(null);
  const handleSelectPhone = (id) => {
    const [phoneSelected] = phones.filter((phone) => phone.id === id);
    setPhone(phoneSelected);
  };

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <PhonesList
                phonesList={phones}
                pending={pending}
                error={error}
                action={handleSelectPhone}
              />
            )}
          />
          <Route
            exact
            path='/:name/detail'
            component={() => (
              <PhoneDetails phone={phone} pending={pending} error={error} />
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
