import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./productdetail.css"
import SlideProduct from '../../components/slideProducts/SlideProducts';
import ProductImages from './Productimages'
import ProductInfo from './ProductInfo'
import Pagetransition from '../../components/Pagetransition';

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await response.json()
                setProduct(data)
            } catch (error) {
                console.log('Error fetching product details:', error);
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    useEffect(() => {
        if (!product) return
        setLoadingRelatedProducts(true)

        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then(response => response.json())
            .then(data => {
                setRelatedProducts(data.products.filter(p => p.id !== product.id))
            })
            .catch(error => console.error("Error fetching related products:", error))
            .finally(() => setLoadingRelatedProducts(false))
    }, [product?.category])

    if (loading) return <h1>Loading....</h1>
    if (!product) return <h1>Product not found....</h1>


    return (
        <Pagetransition>
                <div className="item-details">
                    <div className="container">
                        <ProductImages product={product} />
                        <ProductInfo product={product} />
                    </div>
                </div>
                {loadingRelatedProducts ? (
                    <h1>Loading...</h1>
                ) : (
                    relatedProducts.length > 0 && (
                        <SlideProduct
                            key={product.category}
                            title={`Similar ${product.category}`.replace("-", " ")}
                            data={relatedProducts}
                        />
                    )
                )}
        </Pagetransition>
    )
}
