import React from 'react'
import * as ReactDOMClient from 'react-dom/client';

import { ContextProvider } from './Components/Porfolio/Menu/context';
import { BrowserRouter as Router } from "react-router-dom"

import './index.css'
import App from './App'

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)

root.render(
  <ContextProvider>

  <Router>
    <App tab="home" />
  </Router>

  </ContextProvider>
)
