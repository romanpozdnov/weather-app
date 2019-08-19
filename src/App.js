import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'antd/dist/antd.css';

import store, { persistor } from 'store';

import Input from 'components/asd';
import DetailedInformation from 'components/detailedInformation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={Input} />
            <Route exact path="/cities/:id" component={DetailedInformation} />
            <Route component={() => <div>Not found</div>} />
          </Switch>
        </Router>
        {/* <div>
        <Input />
      </div> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
