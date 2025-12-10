import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./SearchBox.css";
export default function SearchBox() {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            navigate(`/Search?query=${encodeURIComponent(value.trim())}`);
            setValue("");
            setSuggestions([]);
        }
    };
    useEffect(() => {
        const fetchSuggestion = async () => {
            if (!value) {
                setSuggestions([]);
                return;
            }
            try {
                const response = await fetch(
                    `https://dummyjson.com/products/search?q=${value}`
                );
                const data = await response.json();
                setSuggestions(data.products.slice(0, 5) || []);
            } catch (error) {
                console.error(error);
                setSuggestions([]);
            }
        };
        const timeoutId = setTimeout(() => {
            if (value.length > 2) {
                fetchSuggestion();
            } else {
                setSuggestions([]);
            }
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [value]);
    return (
        <div className="searchbox">
            <div className="container search-box-container position-relative">
                <form onSubmit={handleSubmit} className="search-box">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search here..."
                        id="search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        autoComplete="off"
                    />
                    <button type="submit">
                        <FaSearch />
                    </button>
                </form>
                {value && suggestions.length > 0 && (
                    <ul className={`search-suggestions ${suggestions.length ? "active" : ""}`}>
                        {suggestions.map((item) => (
                            <Link to={`/products/${item.id}`} key={item.id}>
                                <li key={item.id}>
                                    <a
                                        href={`/product/${item.id}`}
                                        onClick={() => {
                                            setValue("");
                                            setSuggestions([]);
                                        }}
                                    >
                                        <img src={item.images[0]} alt={item.title} />
                                        <div className="item-title-price">
                                            <span className="product-title">{item.title}</span>
                                            <span className="product-price">${item.price}</span>
                                        </div>
                                    </a>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
