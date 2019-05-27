import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Msg from './components/Msg/Msg'
import Todo from './components/Todo/Todo'

const routers = () => {
    return (
    <Router>
        <Switch>
            {/* <Route path={'/login'} component={Msg} /> */}
            <Route redirectPath={'/login'} component={Msg}/>
        </Switch>
    </Router>

    )
}

export default routers