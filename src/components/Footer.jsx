import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
 var currentYear = new Date().getFullYear()
    return (
        <footer className="page-footer transparent">
          <div className="page">
          <div className="container">
          © In {currentYear} has been created
          <Link className="grey-text text-lighten-4 right" to="/">More Links</Link>
          </div>
          </div>
          
      </footer>
    )
}