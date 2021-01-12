import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import abc from 'pages/abc';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={abc} />
      </Switch>      
    </Router>
  )
}

export default Routes
