import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider'
import { auth } from './firebase';
function Header() {
    const [{ basket, user }] = useStateValue();
     
    const login = ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
        <Link to="/">
        <img className="amazon_logo" src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg" 
        alt="amazon"/>
        </Link>
            <div className="header_searcbox">
                <input type="text" className="header_input"/>
                <SearchIcon className="header_search"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_options">
                    <span className="header_options-line-one">Hello {user?.email}</span>
                    <span className="header_optionsline-two">{user ? "Sign out" : "Sign in"} </span>
                </div>
                </Link>
                <Link className="header_link">
                    <div className="header_options">
                        <span className="header_options-line-one">Return </span>
                        <span className="header_optionsline-two">& Orders</span>
                    </div>
                </Link>
                <Link className="header_link">
                <div className="header_options">
                        <span className="header_options-line-one">Try </span>
                        <span className="header_optionsline-two">Prime</span>
                </div>
                </Link>
                <Link  className="header_link" to='/checkout'>
                    <div className="header_optionbasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionsline-two header_BasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            <div className="basket">

            </div>
        </nav>
    )
}

export default Header
