import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import "./home.css";
import SlideProducts from "../../components/slideProducts/SlideProducts";
import Pagetransition from "../../components/Pagetransition";

const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
];
export default function Home() {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const results = await Promise.all(
                    categories.map(async (category) => {
                        const response = await fetch(
                            `https://dummyjson.com/products/category/${category}`
                        );
                        const data = await response.json();
                        return { [category]: data.products };
                    })
                );
                const productsData = Object.assign({}, ...results);
                setProducts(productsData);
            } catch (err) {
                console.error("Error", err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    return (
        <Pagetransition>
            <div>
                <HeroSlider />
                {
                    loading ? (
                        <h3>Loading....</h3>
                    ) : (
                        categories.map((category) => (
                            <SlideProducts key={category} title={category.replace("-", " ")} description={`Best ${category}`} data={products[category]} />
                        )))
                }
            </div>
        </Pagetransition>
    );
}
