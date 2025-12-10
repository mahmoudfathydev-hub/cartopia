import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import Pagetransition from "../../components/Pagetransition";
import Products from '../../components/slideProducts/Products';



export default function Favourites() {
    const { favouriteItems } = useContext(CartContext);
    return (
        <Pagetransition>
            <div className='category-products'>
                <div className="container">
                    <div className="top-header">
                        <h1>Your favourites Products</h1>
                        <p>We have the best products for you.</p>
                    </div>
                    {favouriteItems.length === 0 ? (
                        <div className="container">
                            <h1>No items in your favourites list.</h1>
                        </div> 
                    ) : (
                        <div className="products">
                            {favouriteItems.map(item => (
                                <Products key={item.id} item={item} />
                            )) }
                        </div>
                    )}
                </div>
            </div>
        </Pagetransition>
    )
}
