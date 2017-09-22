import React from 'react'
import { Switch, Route} from 'react-router-dom'
import SearchImages from './SearchImages'
import Favourites from './Favourites'

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SearchImages}/>
      <Route   path="/search" component={SearchImages}/>
      <Route path="/favorites" component={Favourites}/>
    </Switch>
  </div>
)

export default Main