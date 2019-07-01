import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from '../containers/home_page'
// import Dashboard from '../containers/dashboard'

export const AppRoutes = () => (
    <Switch>
        <Route exact path='/' component= {HomePage} />
        {/* <Route path='/dashboard' component= {Dashboard} /> */}
    </Switch>
)
    
// All routes are defined here