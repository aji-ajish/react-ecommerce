import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RandomItems() {
    const [randomItems, setRandomItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const PRODUCTS_API = 'http://localhost:3333/products'; // Assuming this is the correct endpoint for fetching products

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(PRODUCTS_API);
                setRandomItems(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

    return (
        <>
            {randomItems.map(randomItem => (
                <div key={randomItem.id} className="w-4/6 sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 h-96">
                    <a href="" className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full border border-green-300">
                        <div className="relative pb-48 overflow-hidden pt-16 mt-5">
                            {/* Properly concatenate the path to the first image file */}
                            <img className="absolute inset-0 h-full w-full object-contain" src={require(`../../assets/slider/${randomItem.images[1]}`)} alt={randomItem.name} />
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="mt-2 mb-2 font-bold text-xl text-slate-900">{randomItem.name}</h2>
                        </div>
                    </a>
                </div>
            ))}

        </>
    );
}
