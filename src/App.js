import React  from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './Components/NavigationBar'
import Main from './Components/Main'
import Footer from './Components/Footer'


const App = () => (
  <div>
    <MuiThemeProvider>
      <div>
      <NavigationBar/>
      <Main />
      </div>
    </MuiThemeProvider>
    <Footer />
  </div>
)
export default App;
