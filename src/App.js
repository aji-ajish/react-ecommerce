import { useEffect, useState } from "react";

import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail";
import Header from "./components/layouts/Header";
import { ThreeCircles } from "react-loader-spinner";
import CategoryItems from "./CategoryItems";


function App() {
  const [isMenuScrolled, setIsMenuScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const scrollCheck = () => {
    if (window.pageYOffset > 100) {
      setIsMenuScrolled(true);
    } else {
      setIsMenuScrolled(false);
    }
  };
  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollCheck);
    };
  }, []);

  return (
    <>{loading ? (
      <div className="h-screen w-screen flex items-center justify-center ">
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#12e62f"
          innerCircleColor="#1278e6"
          middleCircleColor="#e612d0"
        />
      </div>
    ) : (<div className="bg-slate-50 dark:bg-slate-900 transition-all duration-700">
      <BrowserRouter>
        <Header isMenuScrolled={isMenuScrolled} />
        <Routes>
          <Route path="/" element={<Home isMenuScrolled={isMenuScrolled} />} />
          <Route path="product/:id" element={<ProductDetail isMenuScrolled={isMenuScrolled} />} />
          <Route path="category/:id" element={<CategoryItems isMenuScrolled={isMenuScrolled} />} />
        </Routes>
      </BrowserRouter>
    </div>)}</>
  );
}

export default App;
