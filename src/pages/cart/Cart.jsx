import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import "./Cart.css";

export default function Cart() {
    const { cartItems, increseQuantity, decreseQuantity, removeFromCart } =
        useContext(CartContext);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div className="checkout">
            <div className="ordersummary">
                <h1>Order Summary</h1>
                <div className="items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className="itemcart" key={index}>
                                <div className="image">
                                    <img src={item.images[0]} alt={item.title} />
                                    <div className="content">
                                        <h3>{item.title}</h3>
                                        <p className="price-item">${item.price}</p>
                                        <div className="quantity-control">
                                            <button onClick={() => decreseQuantity(item.id)}>
                                                -
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button onClick={() => increseQuantity(item.id)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="delete-item"
                                >
                                    <FaTrashCan />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="button-summary">
                    <div className="shop-table">
                        <p>total</p>
                        <span className="total-checkout">${total.toFixed(2)}</span>
                    </div>
                    <div className="button-order">
                        <button type="submit">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
