import React, { useContext } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Products({ item }) {
    if (!item) return null;

    const rawDiscount = Number(item.discountPercentage) || 0;
    const amplifyFactor = 10;
    const minPercent = 5;
    const maxPercent = 70;

    const amplifiedPercent = Math.min(
        Math.max(Math.round(rawDiscount * amplifyFactor), minPercent),
        maxPercent
    );

    const finalPrice = Math.round(item.price * (1 - amplifiedPercent / 100));

    const { cartItems, addToCart , addtoFavourite , favouriteItems , removefromFavourite} = useContext(CartContext);

    const isInCart = cartItems.some(i => i.id === item.id);

    const navigateToProductPage = useNavigate()

    const isFavourited = favouriteItems.some(favItem => favItem.id === item.id)
    const handleAddToFav = () => {
        if(isFavourited){
            removefromFavourite (item.id)
            toast.error(`${item.title} removed from favourites`)
        }else{
            addtoFavourite(item)
            toast.success(`${item.title} added to favourites`)
        }
    }

    const handleAtToCart = () => {
        addToCart(item)
        toast.success(
            <div className="toast-popup">
                <img src={item.images[0]}
                    alt={item.title}
                    className="toast-img"/>
                    <div className="toast-content">
                        <strong>{item.title} Added To Cart</strong>
                        <p>You can view your cart here</p>
                        <div>
                            <button onClick={() => navigateToProductPage('/cart')} className="btn">view cart</button>
                        </div>
                    </div>
            </div>
            ,{duration : 4000}
        )
    }

    return (
        <div className={`product ${isInCart ? 'in-cart' : ''}`}>
            <Link to={`/products/${item.id}`}>
                <span className="statecart"><FaCheck />In A Cart</span>
                <div className="container">
                    <div className="img-product">
                        <span className="sale">Sale</span>
                        <img src={item.images?.[0]} alt={item.title} />
                    </div>

                    <p className="name-product">{item.title}</p>

                    <div className="stars">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <FaRegStarHalfStroke />
                    </div>

                    <div className="price">
                        <span className="price-now">${finalPrice}</span>
                        <p className="discount">
                            <del>${item.price}</del>
                            <span
                                style={{ marginLeft: 8, color: "#e74040", fontWeight: 700 }}
                            >
                                -{amplifiedPercent}%
                            </span>
                        </p>
                    </div>
                </div>
            </Link>

            <div className="card-icon">
                <span onClick={handleAtToCart} className="btn-cart">
                    <GiShoppingCart />
                </span>
                <span onClick={handleAddToFav} className={isFavourited ? 'in-fav' : ''}>
                    <FaRegHeart />
                </span>
                <span>
                    <IoIosShareAlt />
                </span>
            </div>
        </div>
    );
}
