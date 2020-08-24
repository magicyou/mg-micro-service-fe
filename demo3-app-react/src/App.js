import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import store from './store';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
        {/* <GlobalStyled></GlobalStyled> */}
        <Provider store={store}>
           <Main />
        </Provider>
    </div> 
  );
}

export default App;
