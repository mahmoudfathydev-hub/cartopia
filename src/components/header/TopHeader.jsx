import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import LOGO from '../../images/LOGO.png';
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "../header/header.css";
import { CartContext } from "../context/CartContext";
import SearchBox from './SearchBox';

export default function TopHeader() {
    const { cartItems, favouriteItems } = useContext(CartContext);
    return (
        <div className="top-header">
            <div className="container">
                <Link to="/" className='logo'>
                    <img src={LOGO} alt="logo" />
                </Link>

                <SearchBox />
                <div className="header-icons">
                    <div className="icon">
                        <Link to="/favourites">
                            <FaRegHeart />
                            <span className='count'>{favouriteItems.length}</span>
                        </Link>
                    </div>
                    <div className="icon">
                        <Link to="/cart">
                            <TiShoppingCart />
                            <span className='count'>{cartItems.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}