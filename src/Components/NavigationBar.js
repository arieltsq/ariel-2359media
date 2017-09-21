import React, { Component } from 'react';
import {Nav,Navbar, NavItem, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class NavigationBar extends Component {


  render() {

    return (
      <div className="NavigationBar">

        <Navbar  collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Galler<strong>easy</strong></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {/*changed NavItem to Li as NavItem does not work when Navbar.Collapse is used. Refer to https://github.com/react-bootstrap/react-bootstrap/issues/2365 */}
              <li role="presentation"><a href="/search">Search</a></li>
              <li role="presentation"><a href="/favourites">Favourites</a></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
