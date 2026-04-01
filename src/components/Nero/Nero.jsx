import React from 'react'

const Nero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>Big Sale Season</h1>
          <p>
            Mega Discount up to <strong className='off'>70% OFF</strong> on Fashion,
            Electronics & More.
          </p>

          <button className="btn btn-primary">
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="hero-media">

          <div
            className="hero-big"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80')"
            }}
          />

          <div className="hero-side">

            <div
              className="hero-small"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80')"
              }}
            />

            <div
              className="hero-small"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80')"
              }}
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Nero