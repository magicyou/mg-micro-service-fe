import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import { GlobalStyled } from './style.js';
import store from './store';


import Detail from './pages/detail';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
        {/* <GlobalStyled></GlobalStyled> */}
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/detail/:id" exact component={Detail}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    </div> 
  );
}

export default App;
