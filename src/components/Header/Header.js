import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

const links = ['/test','/counter','/zen','/elapse','/route/88'];

export const Header = () => (
  <div>
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Title</a>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            { links.map(function(name, key){
                return (<li key={key}>
                        <Link to={name} activeClassName='route--active'>{name}</Link>
                        </li>)
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
