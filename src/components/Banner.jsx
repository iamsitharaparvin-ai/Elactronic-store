function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: "url('/images/Banner-image.jpg')" }}>
    
      <div className="hero-content">
        <h1>Best Electronics Store</h1>
        <p>Latest Laptops & Gadgets</p>
        <h2>Up to 50% OFF</h2>
        <div className="buttons">
          <a href=""><button className="shop-btn">Shop Now</button></a>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;