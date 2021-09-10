import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './global.css';

const App = () => (
	<BrowserRouter>
        <Switch>    
            <Route exact path='/' component={ Homepage } />
        </Switch>
    </BrowserRouter>
);
 
export default App;
