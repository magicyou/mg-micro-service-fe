import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import store from './store';

import Base from './pages/base';
import Dashboard from './pages/dashboard';
import Detail from './pages/detail';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
        {/* <GlobalStyled></GlobalStyled> */}
        <Provider store={store}>
            <div className="container">
                <BrowserRouter>
                <div className="asider">
                    <Base />
                </div>
                <div className="content">
                    <div>

                        <Route path="/" exact component={Dashboard}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Route path="/detail/:id" component={Detail}></Route> 
                        </div>
                </div>
                        
                </BrowserRouter>
            </div>
        </Provider>
    </div> 
  );
}

export default App;
