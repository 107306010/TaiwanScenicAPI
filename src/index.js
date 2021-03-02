import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom'
import Main from './Main';

const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Main />  
        </Switch>
    </BrowserRouter>,
    root)