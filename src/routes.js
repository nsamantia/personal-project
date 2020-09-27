import {Switch, Route, Redirect} from 'react-router-dom'
import React from 'react'
import Auth from './Components/Auth/Auth'
import Landing from './Components/Landing/Landing'
import Cacti from './Components/Cacti/Cacti'
import Succs from './Components/Succs/Succs'

export default (
    <Switch>
        <Route exact path = "/" component ={Auth} />
        <Route path = "/Landing" component ={Landing} />
        <Route path = "/Cacti" component={Cacti} />
        <Route path = "/Succs" component={Succs} />

        <Route render={() => <Redirect to= "/" />} />
    </Switch>
)