import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './store/reducer/reducer'
import thunk from 'redux-thunk'
import GoogleLogin from './containers/GoogleLogin/GoogleLogin';
import { BrowserRouter, Route } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk))


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={GoogleLogin} />
          <Route path="/orders" component={Layout} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
