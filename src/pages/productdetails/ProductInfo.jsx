import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart, FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProductInfo({ product }) {
    const rawDiscount = Number(product.discountPercentage) || 0;
    const amplifyFactor = 10;
    const minPercent = 5;
    const maxPercent = 70;

    const amplifiedPercent = Math.min(
        Math.max(Math.round(rawDiscount * amplifyFactor), minPercent),
        maxPercent
    );

    const finalPrice = Math.round(product.price * (1 - amplifiedPercent / 100));

    const navigateToProductPage = useNavigate()

    const { cartItems, addToCart, addtoFavourite, favouriteItems, removefromFavourite } = useContext(CartContext);

    const isInCart = cartItems.some(i => i.id === product.id);
    const handleAtToCart = () => {
        addToCart(product)
        toast.success(
            <div className="toast-popup">
                <img src={product.images[0]}
                    alt={product.title}
                    className="toast-img" />
                <div className="toast-content">
                    <strong>{product.title} Added To Cart</strong>
                    <p>You can view your cart here</p>
                    <div>
                        <button onClick={() => navigateToProductPage('/cart')} className="btn">view cart</button>
                    </div>
                </div>
            </div>
            , { duration: 4500 }
        )
    }

    const isFavourited = favouriteItems.some(favItem => favItem.id === product.id)
    const handleAddToFav = () => {
        if (isFavourited) {
            removefromFavourite(product.id)
            toast.error(`${product.title} removed from favourites`)
        } else {
            addtoFavourite(product)
            toast.success(`${product.title} added to favourites`)
        }
    }

    return (
        <div className="details-item">
            <h1 className="name">{product.title}</h1>

            <div className="rating">
                <h3>
                    Total Rating: <span>{product.rating}</span>
                </h3>
                <div className="stars">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <FaRegStarHalfStroke />
                </div>
            </div>

            <div className="price-box">
                <del className="old-price">${product.price.toFixed(2)}</del>

                <span className="new-price">${finalPrice}</span>

                <span className="discount-badge">-{amplifiedPercent}%</span>
            </div>


            <h4>
                Brand: <span>{product.brand}</span>
            </h4>
            <p className="cat">{product.category}</p>
            <p className="description">{product.description}</p>
            <h5>
                Availability:{" "}
                <span>{product.stock > 0 ? "In Stock" : "Out of stock"}</span>
            </h5>
            <span>
                Hurry up! Only <span className="stock">{product.stock}</span> left in
                stock. Order now
            </span>
            <button onClick={handleAtToCart} className={`btn ${isInCart ? 'in-cart' : ''}`}>
                {isInCart ? 'Added to cart' : 'Add to cart'}            <BsCart4 />
            </button>
            <span onClick={handleAddToFav} className={isFavourited ? 'in-fav' : ''}>
                <FaRegHeart />
            </span>
            <span className="svg">
                <IoIosShareAlt />
            </span>
        </div>
    );
}
