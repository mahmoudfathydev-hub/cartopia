import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../components/slideProducts/products';
import './category.css';
import Pagetransition from '../../components/Pagetransition';


export default function CategoryPage() {
    const { category } = useParams();

    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setCategoryProducts(data.products))
            .catch(err => console.error(err));
    }, [category]);
    return (
        <Pagetransition>
            <div className='category-products'>
                <div className="container">
                    <div className="top-header">
                        <h1>{category}</h1>
                        <p>Best products for your needs in {category}</p>
                    </div>
                    <div className="products">
                        {categoryProducts.map((item, index) => (
                            <Products item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </Pagetransition>
    );
}