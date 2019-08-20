import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'antd/dist/antd.css';

import store, { persistor } from 'store';

import CitiesContainer from 'containers/cities-container';
import WeatherContainer from 'containers/weather-container';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={CitiesContainer} />
            <Route exact path="/cities/:id" component={WeatherContainer} />
            <Route component={() => <div>Not found</div>} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
