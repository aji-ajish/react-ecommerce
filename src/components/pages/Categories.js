import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Categories() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const CATEGORIES_API = ' http://localhost:3333/categories'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(CATEGORIES_API);
                setCategories(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData()

        
    }, [])


    return (
        
        <>{categories.map((category => (
            <div key={category.id} class="w-4/6 sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 h-96 ">
                <a href="" class="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full border border-green-300">
                    <div class="relative pb-48 overflow-hidden pt-16 mt-5">
                        <img class="absolute inset-0 h-full w-full object-contain" src={require(`../../assets/categorie/${category.image}`)} alt={category.name} />
                    </div>
                    <div class="p-4 text-center">
                        <h2 class="mt-2 mb-2  font-bold text-xl text-slate-900">{category.name}</h2>

                    </div>

                </a>
            </div>
        )))}</>
    )
}
