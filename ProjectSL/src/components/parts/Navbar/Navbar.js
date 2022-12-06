import React, {useState} from 'react';
import './Navbar.css';
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import {MdAppRegistration} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Navbar = () => {
  
 
  const [showMenu,setShowMenu] = useState(false);
 
  
  const toggleMenu= () =>{
    setShowMenu(!showMenu);
  }
  
 

  return (
    <nav className="navbar navbar-expand-lg fixed-top ">
  
    
    <div className='menu-icons' onClick={toggleMenu}>
         {showMenu ?( 
            <RiCloseLine color='#fff' size={35} style={{background:"transparent"}} />
            ) : (
           <AiOutlineBars color='#fff' size={32} style={{background:"transparent"}}/>
         )}
       </div>
    <ul className='nav-links navbar mr-auto' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide" }>
           
           <li><Link to='/' style={{fontSize: "0.8rem"}}>Home</Link></li>
           <li><Link style={{fontSize: "0.8rem"}} to='/aboutus'>Us</Link></li>
            <li><Link style={{fontSize: "0.8rem"}} to='/faq'>FAQ</Link></li>
           <li><Link style={{fontSize: "0.8rem"}} to='/team'>Team</Link></li>
           <li><Link style={{fontSize: "0.8rem"}} to='/contactus'>Contact</Link></li>
          
        </ul>
      <div className='icons mobhide' style={{background:"transparent"}}>
          
        <Link to='/register' ><MdAppRegistration size={20} style={{background:"transparent"}}/> Sign Up</Link>
        <Link to='/login' >Login</Link>
            <a
             href='https://www.facebook.com/profile.php?id=100082853053207' target={'_blank'}><BsFacebook size={20}/></a>
          <select style={{border:"none",fontWeight:"200"}}>
              <option> <a style={{fontSize: "0.9rem"}} href='#footer'>ENG</a></option>
              <option> <a style={{fontSize: "0.9rem"}} href='#footer'>GEO</a></option>
          </select>
         </div>
  
  </nav>
  
  );
}

export default Navbar 

/*

 <nav className='container navbar'>
      <div className='menu-icons' onClick={toggleMenu}>
         {showMenu ?( 
            <RiCloseLine color='#fff' size={35} />
            ) : (
           <AiOutlineBars color='#fff' size={32}/>
         )}
       </div>
       <div className='top'>
        <div className='navbarmenu'>
         <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide" }>
           
            <li><Link to='/' style={{fontSize: "0.8rem"}}>Home</Link></li>
            <li><Link style={{fontSize: "0.8rem"}} to='/aboutus'>Us</Link></li>
             <li><Link style={{fontSize: "0.8rem"}} to='/faq'>FAQ</Link></li>
            <li><Link style={{fontSize: "0.8rem"}} to='/team'>Team</Link></li>
            <li><Link style={{fontSize: "0.8rem"}} to='/contactus'>Contact</Link></li>
           
         </ul>
         </div>
         <div className='icons mobhide'>
          
        <Link to='/register' ><MdAppRegistration size={20}/> Sign Up</Link>
        <Link to='/login' >Login</Link>
            <a
             href='#footer'><BsFacebook size={20}/></a>
            <a style={{fontSize: "0.9rem"}} href='#footer'>ENG</a>
         </div>
       </div>
       

    </nav>





*/