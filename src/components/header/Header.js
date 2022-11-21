import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { BsSearch } from 'react-icons/bs';
import { TiShoppingCart } from 'react-icons/ti';
import { GrLocation } from 'react-icons/gr';
import Lists from '../../Lists';
import 'react-bootstrap'
// import { IconContext } from "react-icons";
import { useStateValue } from "../stateProvider/StateProvider"
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import Location from './Location';
// import { IconContext } from 'react-icons/lib';

function Header() {
    const [{ user, basket }] = useStateValue();
    const navigate = useNavigate();
    // console.log(basket);
    // console.log(user);

    const loginLogout = () => {
        if (user) {
            signOut(auth);
            navigate("/login")
        }
    }
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img className="header__logo header__link"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo" />
            </Link>
            {/* links */}

            <div className="header__nav mt-1">
                <Link className="header__link">
                    {/* <IconContext.Provider value={{ color: "white", className: "global-class-name"}}> */}
                    <div className="header__loc mt-2 mr-0" >
                        {/* <IconContext.Provider
                            value={{ color: 'white', size: '20px' }}
                        >
                            <div>
                                <GrLocation />
                            </div>
                        </IconContext.Provider> */}

                        <GrLocation className='header__lok' />
                    </div>
                    {/* </IconContext.Provider> */}
                    <div className="header__option mt-1">
                        <span className="header__optionLineOne">Delivery to</span>
                        <span className="header__optionLineTwo "><Location /></span>
                    </div>
                </Link>
            </div>

            <div className="header__Lists">
                <Lists className="header__searchLists" />
            </div>
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <BsSearch className="header__searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav header__link">
                {/* <Link to="/language" className="header__link"> */}
                <div className="header__option">
                    <span className="header__optionLineTwo">Language</span>
                </div>
                {/* </Link> */}
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={loginLogout} className="header__option">
                        <span className="header__optionLineOne">Hello, {!user ? "Guest" : user?.email}</span>
                        <span className="header__optionLineTwo">{!user ? 'Sign in' : 'Sign out'}</span>
                    </div>
                </Link>
            </div>

            <div className="header__nav">
                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
            </div>


            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping basket icon */}
                    <TiShoppingCart />
                    {/* number of items in the basket */}
                    {/* we use {basket?.length} to render the length of the basket when basket property of the state reaches the header component. without this, the dom will render the basket.length even when it has not reach the header component therby resulting to an error  */}
                    <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                </div>
            </Link>
            {/* basket icon with number*/}
        </nav>
    )
}

export default Header

