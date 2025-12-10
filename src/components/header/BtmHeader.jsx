import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";

const Navlinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
];

export default function BtmHeader() {
    const location = useLocation()
    const [categories, setCategories] = useState([]);
    const [isCategoryOpen , setIsCategoryOpen] = useState(false)

    useEffect(()=>{
        setIsCategoryOpen(false)
    },[location])


    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div className="btm-header">
            <div className="container">
                <nav className="nav">
                    <div className="category-nav">
                        <div onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="category-btn">
                            <GiHamburgerMenu />
                            <p>Browse Categories</p>
                            <FaChevronDown />
                        </div>
                        <div className={`category-nav-list ${isCategoryOpen ? 'active ' : ''} category-list}`}>
                            {categories.map((category) => (
                                <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="nav-links">
                        {Navlinks.map((pages) => (
                            <li key={pages.link} className={location.pathname === pages.link ? "active" : ""}>
                                <Link to={pages.link}>
                                    {pages.title}
                                </Link>
                            </li>
                        ))}
                    </div>
                </nav>
                <div className="sign-regs-icon">
                    <Link to="/">
                        <PiSignInBold />
                    </Link>
                    <Link to="/">
                        <FaUserPlus />
                    </Link>
                </div>
            </div>
        </div>
    );
}
