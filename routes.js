import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import list from './components/list';
import Word from './components/word';

import Uione from './components/uione';

const Routes = () =>{
    return(
        <Switch>
            <Route path='/Home' exact component={Home}/>
            <Route path='/' exact component={Home}/>
            <Route path='/words/:id' exact component={Word}/>
            <Route path='/list' exact component={list}/>
            <Route path='/uione' exact component={Uione}/>
        </Switch>
    )
}

export default Routes;