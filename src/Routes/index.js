import React from 'react'
import { Route } from 'react-router-dom'

// Import components
import Home from 'Pages/Home'

export default () => (
  <div>
    <Route path="/" component={Home} />
  </div>
)
