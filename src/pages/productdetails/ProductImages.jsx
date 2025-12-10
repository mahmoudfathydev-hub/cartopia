import React from 'react'

export default function ProductImages({ product }) {
    return (
        <div className="img-item">
            <div className="big-img">
                <img id="big-img" src={product.images[0]} alt={product.title} />
            </div>

            <div className="small-img">
                {product.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={product.title}
                        onClick={() => {
                            document.getElementById("big-img").src = image;
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
