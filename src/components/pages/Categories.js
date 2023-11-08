import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Categories() {
    const [categories, setCategories] = useState([])

    const CATEGORIES_API = ' http://localhost:3333/categories'
    useEffect(() => {
        // Fetch product details based on the ID from your API
        fetch(CATEGORIES_API)
          .then((response) => response.json())
          .then((data) => setCategories(data))
          .catch((error) => console.error('Error fetching product:', error));
      }, []);
    
      
      if (!categories) {
        return <div>Loading...</div>;
      }


    return (
        
        <>{categories.map((category => (
            <div key={category.id} className="w-4/5 sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 md:h-96 ">
                <Link to="" className="block bg-gray-50 dark:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-2xl rounded-lg overflow-hidden h-full border border-green-300 dark:border-slate-50 hover:scale-105">
                    <div className="relative pb-48 overflow-hidden pt-16 mt-5">
                        <img className="absolute inset-0 h-full w-full object-contain" src={require(`../../assets/${category.image}`)} alt={category.name} />
                    </div>
                    <div className="p-4 text-center">
                        <h2 className="mt-2 mb-2  font-bold text-xl dark:text-slate-50 text-slate-900">{category.name}</h2>

                    </div>

                </Link>
            </div>
        )))}</>
    )
}
