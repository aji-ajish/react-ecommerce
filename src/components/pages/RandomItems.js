import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function RandomItems() {
    const [randomItems, setRandomItems] = useState([]);

    const PRODUCTS_API = 'http://localhost:3333/products'; // Assuming this is the correct endpoint for fetching products

    useEffect(() => {
        // Fetch product details based on the ID from your API
        fetch(PRODUCTS_API)
            .then((response) => response.json())
            .then((data) => setRandomItems(data))
            .catch((error) => console.error('Error fetching product:', error));
    }, []);


    if (!randomItems) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {randomItems.map(randomItem => (
                randomItem.random_item ? (
                    <div key={randomItem.id} className="w-4/6 sm:w-1/2 md:w-1/3 xl:w-1/4 p-2 group relative">
                        <Link to={`product/${randomItem.id}`} className="block bg-white shadow-md group-hover:shadow-2xl rounded-lg overflow-hidden h-full border border-green-300 group-hover:scale-105 transition-all duration-200">
                            <div className="relative pb-48 overflow-hidden pt-16 mt-5">
                                {/* Properly concatenate the path to the first image file */}
                                <img className="absolute inset-0 h-full w-full object-contain" src={require(`../../assets/${randomItem.images[0]}`)} alt={randomItem.name} />
                            </div>
                            {/* <p className='text-red-600 text-lg'>stock left {randomItem.stock}</p> */}
                            <div className="p-4 mb-5 text-center">
                                <h2 className="mt-2 mb-1 font-bold text-lg text-slate-800">{randomItem.name}</h2>
                                <div className='flex justify-center space-x-6 items-center'>

                                    {randomItem.stock > 0 ? (
                                        randomItem.stock <= 5 ? (
                                            <p className="text-red-400 text-md">Stock left: {randomItem.stock}</p>
                                        ) : ('')) : (<p className="text-red-400 text-md">Out of stock</p>
                                    )}
                                    <h2 className="text-xl text-red-600">₹{randomItem.price}</h2>
                                </div>
                            </div>
                        </Link>
                        <div className='absolute top-96 -mt-4 left-0 w-full hidden group-hover:block transition-all duration-300'>
                            <div className='flex justify-center space-x-16 p-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer text-emerald-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ) : ''

            ))}

        </>
    );
}
