import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/Reducer';
import Fruitlist from './Fruitslist';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Fruit List</h1>
        <Fruitlist />
      </div>
    </Provider>
  );
};

export default App;