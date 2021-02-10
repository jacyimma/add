import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  const icon = ['dehaze','close']
  const [click, setClick] = useState(false)
    return (
  <nav className="transparent">
    <div className="nav-wrapper sticky">
      <Link to="/" className="brand-logo">Food Shop</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/liked"> Liked</Link>
         </li>
        <li><Link to="/join">Join</Link></li>
      </ul>    
         <span 
         className="right hide-on-large-only" 
         onClick={()=>{
          setClick(!click)
         }}>
         <i className="show-on-medium-and-down material-icons">{click ? icon[1]:icon[0]}</i>
         </span>
    </div>
         <ul className={click ? 'miniNavbar':'miniNavbar no'}>
              <li><Link className="miniA" to="/liked">Liked</Link></li>
              <li><Link className="miniA" to="/join">Join</Link></li>
         </ul>
  </nav>
    )
}
