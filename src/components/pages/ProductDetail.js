import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarEmpty, StarFilled, StarHalf } from '../layouts/StarIcons';


function ProductDetail({ isMenuScrolled }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [itemCount, setItemCount] = useState(1)

    useEffect(() => {
        // Fetch product details based on the ID from your API
        fetch(`http://localhost:3333/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    const increaseItem = () => {
        if (product.stock > itemCount) {
            setItemCount(itemCount + 1)
        }
    }
    const decreaseItem = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
    }

    return (
        <>
            <section className={`${isMenuScrolled ? 'pt-48 lg:pt-52' : 'pt-24 lg:pt-40'} px-2 container pb-56 mx-auto font-nunito`}>
                <div className="flex flex-col md:flex-row w-full space-x-2 h-[60%]">
                    {/* Product Images h-72 md:h-[3rem]*/}
                    <div className="flex w-full md:w-2/5 space-x-2 h-[30vh] md:h-[50vh]">
                        <div className="w-28  px-1 flex flex-col items-center space-y-2 border py-2">
                            {product.images.map((image, index) => (
                                <div key={index} className="h-20 w-full border">
                                    <img className="h-full w-full object-scale-down " src={require(`../../assets/${image}`)} alt={product.name} />
                                </div>
                            ))}

                        </div>
                        <div className='h-full w-full'>
                            <img className='h-full w-full object-scale-down' src={require(`../../assets/${product.images[0]}`)} alt={product.name} />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-3/5 bg-slate-100 dark:bg-slate-800 rounded-md p-4 transition-all duration-500">
                    <div className='flex space-x-3  items-baseline'>
                        <h2 className="text-3xl dark:text-slate-100 font-semibold mb-4">{product.name}</h2>
                        {product.reviews.map((review) => (
                            <div key={review.id}>
                                <div className="flex items-center">
                                    {Array.from(Array(5), (_, index) => {
                                        const starValue = index + 1;
                                        if (starValue <= review.rating) {
                                            return <StarFilled key={index} />;
                                        } else if (starValue - 0.5 <= review.rating) {
                                            return <StarHalf key={index} />;
                                        } else {
                                            return <StarEmpty key={index} />;
                                        }
                                    })}
                                </div>
                            </div>
                        ))}
                        </div>
                        <p className="text-gray-600 dark:text-slate-100 mb-4">{product.description}</p>
                        <div className="flex items-center  space-x-3 mb-4">
                            <span className="text-red-500 line-through text-lg font-semibold">₹{product.price}</span>
                            <span className="text-3xl text-indigo-600 font-semibold"><span className='text-2xl'>₹</span>{product.offer_price}</span>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2 dark:text-slate-100">Available Sizes:</h3>
                            <ul className="pl-4 flex gap-4">
                                {product.size.map((size, index) => (
                                    <li key={index} className=''><button className='p-1 bg-slate-50 rounded-md px-2 border border-slate-700'>{size}</button></li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2 dark:text-slate-100">Available Colors:</h3>
                            <div className="flex space-x-3">
                                {product.color.map((color, index) => (
                                    <div key={index}><button style={{ background: color }} className={` border p-1 rounded-md px-2 h-6 w-6 shadow-2xl shadow-black `}>
                                    </button></div>
                                ))}
                            </div>
                        </div>
                        {product.stock > 0 ? (
                            <div className="mb-4 flex space-x-4 items-center">
                                <button className='px-3 bg-slate-400 text-slate-50 text-xl font-bold rounded-md' onClick={decreaseItem}>-</button>
                                <p className='w-12 border-slate-600 border text-center rounded-md dark:text-slate-100'>{itemCount}</p>
                                <button className='px-2 bg-slate-400 text-slate-50 text-xl font-bold rounded-md' onClick={increaseItem}>+</button>
                                <button className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                                    Add to Cart
                                </button>
                            </div>) : (''
                        )}
                        <div className='w-10/12'>
                            {product.stock <= 5 ? (
                                <p className='text-red-600 text-lg'>stock left {product.stock}</p>
                            ) : ''}
                            {product.stock > 0 ? (
                                <button className="bg-indigo-500 w-full text-white py-2 px-6  rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                                    Buy Now
                                </button>) : (
                                <button className="bg-red-500 w-full text-white py-2 px-6 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                    Out of Stock
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className='container mx-auto px-2 py-5 font-poppins text-slate-900 dark:text-slate-50'>
                    <h2 className='text-center p-5 text-4xl '>Details</h2>
                    <p className='lg:leading-loose leading-relaxed lg:text-lg capitalize indent-10 align-baseline text-justify'>{product.details}</p>
                </div>
                <div className='container mx-auto px-5 py-5  font-poppins text-slate-900 dark:text-slate-50'>
                    <h2 className='p-5 text-4xl '>Reviews:</h2>
                    <ul className='px-10'>
                        {product.reviews.map((review) => (
                            <li key={review.id}>
                                <div className="flex items-center"><p className='text-lg mr-2' > {review.name}</p>
                                    {Array.from(Array(5), (_, index) => {
                                        const starValue = index + 1;
                                        if (starValue <= review.rating) {
                                            return <StarFilled key={index} />;
                                        } else if (starValue - 0.5 <= review.rating) {
                                            return <StarHalf key={index} />;
                                        } else {
                                            return <StarEmpty key={index} />;
                                        }
                                    })}
                                </div>
                                <em>{review.title}</em><br />
                                {review.review}<br />
                                <small>{review.date}</small>
                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </>
    );
}

export default ProductDetail;
