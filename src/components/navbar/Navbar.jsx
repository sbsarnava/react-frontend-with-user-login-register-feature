import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../../redux/user/user.action'
import './navbar.css'

const Navbar = ({ c }) => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(userLogout())
    }

    return (
        <nav className={`${c} navbar`} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    Hosting Ecom
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Store
                    </a>

                    <a className="navbar-item">
                        Pricing
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Services
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Web Hosting
                            </a>
                            <a className="navbar-item">
                                Managed Wordpress Hosting
                            </a>
                            <a className="navbar-item">
                                Email Hosting
                            </a>
                            <a className="navbar-item">
                                Email Hosting
                            </a>


                        </div>
                    </div>
                </div>
                {user ? (<div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {/* <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a> */}
                            <a className="button is-light" onClick={logoutHandler}>
                                Log Out
                            </a>
                        </div >
                    </div >
                </div >) : (<div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to='/register' className="button is-primary">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to='/login' className="button is-light">
                                Log in
                            </Link>
                        </div >
                    </div >
                </div >)
                }


            </div >
        </nav >


    )
}

export default Navbar
