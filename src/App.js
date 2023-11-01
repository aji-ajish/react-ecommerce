import { useEffect, useState } from "react";
import Header from "./components/layouts/Header";
import Home from "./components/pages/Home";

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
console.log(isMenuScrolled);
  return (
    <>
      <Header  isMenuScrolled={isMenuScrolled}/>
      <Home isMenuScrolled={isMenuScrolled}/>
    </>
  );
}

export default App;
