import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pagetransition from "../../components/Pagetransition";
import Products from '../../components/slideProducts/Products.jsx';

import { tr } from "framer-motion/client";

export default function SearchPage() {
    const query = new URLSearchParams(useLocation().search).get("query");

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://dummyjson.com/products/search?q=${query}`
                );
                const data = await response.json();
                setResults(data.products || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (query) fetchData();
    }, [query]);

    return (
        <Pagetransition key={query}>
            <div className="category-products">
                <div className="container">
                    <div className="top-header">
                        {results.length > 0 && <h1>Results For: {query}</h1>}
                    </div>

                    <div className="products">
                        {loading ? (
                            <p className="loading">Searching...</p>
                        ) : results.length === 0 ? (
                            <p className="no-products">No Product Found</p>
                        ) : (
                            results.map((item) => <Products item={item} key={item.id} />)
                        )}
                    </div>
                </div>
            </div>
        </Pagetransition>
    );
}
