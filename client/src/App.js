import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PhonesList } from './components';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/phones' component={PhonesList} />
      </Switch>
    </div>
  );
}

export default App;
