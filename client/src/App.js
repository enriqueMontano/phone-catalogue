import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhones } from './redux/action';
import { PhonesList } from './components/PhonesList/PhonesList.component';
import { PhoneDetails } from './components/PhoneDetails/PhoneDetails.component';
import './App.css';

function App() {
  const phones = useSelector((state) => state.phones);
  const error = useSelector((state) => state.error);
  const pending = useSelector((state) => state.pending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <PhonesList phonesList={phones} />}
        />
        <Route exact path='/:name/detail' component={PhoneDetails} />
      </Switch>
    </div>
  );
}

export default App;
