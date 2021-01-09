//source: https://codepen.io/EduardL/pen/aBGAy

import React, { Component } from "react"
import { NavLink, Link } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <div>

                <nav className="main-menu">

                    <div className="logo">
                    </div>

                    <div className="scrollbar" id="style-1">

                        <ul>
                            <li>
                                <NavLink className="navLinkNotFocus" exact activeClassName='navLinkFocus' to="/">
                                    <i className="fa fa-home fa-lg"></i>
                                    <span className="nav-text">Homepage</span>
                                </NavLink>
                            </li>

                            <h5 className="sectionHeader">Cuisine</h5>

                            <li>
                                <NavLink className="navLinkNotFocus" exact activeClassName='navLinkFocus' to="/cuisine/snack">
                                    <i className="fa fa-home fa-lg"></i>
                                    <span className="nav-text">Snacks</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="navLinkNotFocus" exact activeClassName='navLinkFocus' to="/cuisine/main">
                                    <i className="fa fa-home fa-lg"></i>
                                    <span className="nav-text">Mains</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="navLinkNotFocus" exact activeClassName='navLinkFocus' to="/cuisine/dessert">
                                    <i className="fa fa-home fa-lg"></i>
                                    <span className="nav-text">Desserts</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="navLinkNotFocus" exact activeClassName='navLinkFocus' to="/cuisine/drink">
                                    <i className="fa fa-home fa-lg"></i>
                                    <span className="nav-text">Drinks</span>
                                </NavLink>
                            </li>

                            <h5 className="sectionHeader">Familiar</h5>

                            <li>
                                <NavLink className="navLinkNotFocus" exact activeClassName='navLinkFocus' to="/familiar/feline">
                                    <i className="fa fa-home fa-lg"></i>
                                    <span className="nav-text">Feline</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="navLinkNotFocus" exact activeClassName='navLinkFocus' to="/familiar/canine">
                                    <i className="fa fa-home fa-lg"></i>
                                    <span className="nav-text">Canine</span>
                                </NavLink>
                            </li>
                            
                            <div className="navFooter">
                            </div>
                        </ul>
                    </div>
                </nav>

            </div >
        )
    }
}

export default NavBar