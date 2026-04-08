import React from 'react'
import './CategoryNav.css'
import { Link } from "react-router-dom";
function CategoryNav() {
  return (
    <nav className="category-nav">
      <div className="category-container">
        <ul className="category-links">
          <li>
            <Link to="/products">
              <span className="category-icon">🏪</span>
              <span className="category-label">All Categories</span>
            </Link>
          </li>
          <li>
            <Link to="/products/fashion">
              <span className="category-icon">👕</span>
              <span className="category-label">Fashion</span>
            </Link>
          </li>
          <li>
            <Link to="/products/electronics">
              <span className="category-icon">📱</span>
              <span className="category-label">Electronics</span>
            </Link>
          </li>
          <li>
            <Link to="/products/home">
              <span className="category-icon">🏠</span>
              <span className="category-label">Home & Living</span>
            </Link>
          </li>
          <li>
            <Link to="/products/beauty">
              <span className="category-icon">💄</span>
              <span className="category-label">Beauty</span>
            </Link>
          </li>
          <li>
            <Link to="/products/toys">
              <span className="category-icon">🎮</span>
              <span className="category-label">Toys</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default CategoryNav