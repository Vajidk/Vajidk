import Link from "next/link";
import { useEffect, useRef } from "react";

const HeaderComponent = () => {
     const inputEl = useRef(null);
     const hamburger = useRef(null);
    // const hamburger = document.querySelector(".hamburger");
    // const navWrap = document.querySelector(".nav-wrap");
    // const body = document.querySelector("body");
//     useEffect(() => {
//     // Focus the input element when the component mounts
//     inputEl.current.focus(); 
//   }, []); 
  console.log(inputEl.current);

    
      const handleToggle = () => {

          hamburger.current.classList.toggle("open");
          inputEl.current.classList.toggle("open");
          // body.classList.toggle("noScroll");
      }
     
    
    
  return (
    <header>
        <div className="header-container">
            <Link href="#" className="logo">
                <img src="assets/images/logo_UzOPay.svg" alt="Brand Logo" height="24" width="72"/>
            </Link>
            <div className="hamburger" onClick={()=>{handleToggle()}} ref={hamburger}>

                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className="nav-wrap" ref={inputEl}>
                <ul className="nav-menu">
                    <li><Link href="#home" className="nav-link active">Home</Link></li>
                    <li><Link href="#aiBanking" className="nav-link submenu">Ai Banking</Link></li>
                    <li><Link href="#payments" className="nav-link">Payments</Link></li>
                    <li><Link href="#payouts" className="nav-link">Payouts</Link></li>
                    <li><Link href="#payroll" className="nav-link">Payroll</Link></li>
                    <li><Link href="#contactus" className="nav-link">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default HeaderComponent;
