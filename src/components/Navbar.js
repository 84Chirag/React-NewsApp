import React from 'react';
import ghost from '../ghost-icon.jpg'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

//props means properties which is used to pass data, but here as this is a child component it used to collect the data which is passed from parent component
//props can be used like this {props."specific-name-you-used-to-describe-it"}
function Navbar(props) {
    return (
        // this is a component which is a block of html code which we exporting as a Js function so it can be used again and again
        // component = html code as a JavaScript Function which is exported to app.js so it can be used as many times as we want also known as 'Functional Components'
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <Link className="navbar-brand" to="/">
                <img src={ghost} alt="icon" style={{ width: '50px', height: '55px', background: 'transparent', borderRadius: '100px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">{props.nav}<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.nav1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.nav2}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
                            {props.nav3}
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">{props.nav4}</a>
                            <a className="dropdown-item" href="/">{props.nav5}</a>
                            <a className="dropdown-item" href="/">{props.nav6}</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">{props.nav7}</Link>
                    </li>
                </ul>
                <button type='button' onClick={props.togglemode} style={{background:props.mode==='dark'?'silver':'yellow'}} className='btn btn5'></button>
                {/* <div className="custom-control custom-switch">
                    <input type="checkbox" onClick={props.togglemode} className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1"></label>
                </div> */}
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar;

//DefaultProps is used in case of 'if the data is not passed from parent component'
Navbar.defaultProps = {
    nav: "Home",
    nav1: "About",
    nav2: "Skills",
    nav3: "Projects",
    nav4: "Javascipts Projects",
    nav5: "React-JS Projects",
    nav6: "PHP Projects",
    nav7: "Contact"
}