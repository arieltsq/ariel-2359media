import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import Main from './Components/Main'
import Footer from './Components/Footer'


const App = () => (
  <div>
    <NavigationBar/>
    <Main />
    <Footer />
  </div>
)
export default App;
