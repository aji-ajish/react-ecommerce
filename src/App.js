import { useEffect, useState } from "react";

import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail";
import Header from "./components/layouts/Header";


function App() {
  const [isMenuScrolled, setIsMenuScrolled] = useState(false);


  const scrollCheck = () => {
    if (window.pageYOffset > 100) {
      setIsMenuScrolled(true);
    } else {
      setIsMenuScrolled(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollCheck);
    };
  }, []);
  return (
    <div className="bg-slate-50 dark:bg-slate-900 transition-all duration-700">
      <BrowserRouter>
        <Header isMenuScrolled={isMenuScrolled} />
        <Routes>
          <Route path="/" element={<Home isMenuScrolled={isMenuScrolled} />} />
          <Route path="product/:id" element={<ProductDetail isMenuScrolled={isMenuScrolled} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
