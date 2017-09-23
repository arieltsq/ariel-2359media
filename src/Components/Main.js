import React from 'react'
import {Route,BrowserRouter} from 'react-router-dom'

import SearchImages from './SearchImages'
import Favourites from './Favourites'

// Acts like routes

const Main = () => (
  <BrowserRouter>
    <div>
            <Route exact path="/" component={SearchImages}/>
            <Route   path="/search" component={SearchImages}/>
            <Route path="/favorites" component={Favourites}/>
     </div>
   </BrowserRouter>

)

export default Main
