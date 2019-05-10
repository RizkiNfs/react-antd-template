import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BaseLayout from 'Layout/BaseLayout'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={BaseLayout} />
      </Switch>
    </Router>
  );
}

export default App
