import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './store/reducer/reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
