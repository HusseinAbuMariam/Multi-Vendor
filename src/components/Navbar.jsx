import React from 'react'
import { useState } from 'react'
import '../App.css'
import CategoryNav from './CategoryNav';
const Navbar = () => {
    
      const [isMenuOpen, setIsMenuOpen] = useState(false)
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }
    
      const closeMenu = () => {
        setIsMenuOpen(false)
      }
    
      // Close menu when clicking outside
      const handleMenuClick = (e) => {
        e.stopPropagation()
        }
  return (
    <div className="app">
        <nav className="navbar">
        <div className="navbar-left">
          <img className="brand-icon" src="https://img.icons8.com/ios-filled/50/ffffff/shopping-bag.png" alt="Logo" />
          <h1 className="brand">Multi-Vendor</h1>
        </div>
        <div className="navbar-center">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button" title="Search">
              🔍
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
            <ul className={`nav-links mobile-nav ${isMenuOpen ? 'nav-links-mobile' : ''}`} onClick={handleMenuClick}>
              <li className="mobile-menu-header">
                <span>Menu</span>
                <button className="close-menu" onClick={closeMenu}>&times;</button>
              </li>
              <li><a href="#home" onClick={closeMenu}>🏠 Home</a></li>
              <li><a href="#wishlist" onClick={closeMenu}>❤️ Wishlist</a></li>
              <li><a href="#contact" onClick={closeMenu}>📞 Contact</a></li>
              <li style={{borderTop: '1px solid rgba(255, 255, 255, 0.3)', margin: '0.5rem 0 0 0', padding: '0.5rem 0 0 0'}}><a href="#all" onClick={closeMenu}>🏪 All Categories</a></li>
              <li><a href="#fashion" onClick={closeMenu}>👕 Fashion</a></li>
              <li><a href="#electronics" onClick={closeMenu}>📱 Electronics</a></li>
              <li><a href="#home-living" onClick={closeMenu}>🏠 Home & Living</a></li>
              <li><a href="#beauty" onClick={closeMenu}>💄 Beauty</a></li>
              <li><a href="#toys" onClick={closeMenu}>🎮 Toys</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <div className="nav-item">
            <button className="nav-icon hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-icon" title=" Home">
              🏠 
            </button>
            <span className="nav-label">Home</span>
          </div>
          <div className="nav-item">
            <button className="nav-icon" title="Wishlist">
              ❤️
            </button>
            <span className="nav-label">Wishlist</span>
          </div>
          <div className="nav-item">
            <button className="nav-icon" title="Contact">
              📞 
            </button>
            <span className="nav-label">Contact</span>
          </div>
          <div className="nav-item">
            <button className="nav-icon" title="Offers">
              🎁
            </button>
            <span className="nav-label">Offers</span>
          </div>
          <div className="nav-item">
            <button className="nav-icon" title="Account">
              👤
            </button>
            <span className="nav-label">Account</span>
          </div>
        </div>
      </nav>
      <CategoryNav />
    </div>
  )
}

export default Navbar