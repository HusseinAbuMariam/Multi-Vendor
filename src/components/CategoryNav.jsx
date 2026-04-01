import React from 'react'
import './CategoryNav.css'

function CategoryNav() {
  return (
    <nav className="category-nav">
      <div className="category-container">
        <ul className="category-links">
          <li>
            <a href="#all">
              <span className="category-icon">🏪</span>
              <span className="category-label">All Categories</span>
            </a>
          </li>
          <li>
            <a href="#fashion">
              <span className="category-icon">👕</span>
              <span className="category-label">Fashion</span>
            </a>
          </li>
          <li>
            <a href="#electronics">
              <span className="category-icon">📱</span>
              <span className="category-label">Electronics</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <span className="category-icon">🏠</span>
              <span className="category-label">Home & Living</span>
            </a>
          </li>
          <li>
            <a href="#beauty">
              <span className="category-icon">💄</span>
              <span className="category-label">Beauty</span>
            </a>
          </li>
          <li>
            <a href="#toys">
              <span className="category-icon">🎮</span>
              <span className="category-label">Toys</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default CategoryNav