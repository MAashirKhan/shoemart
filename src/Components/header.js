import React, { Component } from 'react'
import Menu from './Icons/bars-solid.svg'
import Close from './Icons/times-circle-solid.svg'
import CartIcon from './Icons/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './CSS/Header.css'
import Logo from '../logo.png'

export class Header extends Component {
    // static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="Logo"/></Link>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="30"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>0</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header