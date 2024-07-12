import React, { useEffect } from "react";
import Header from "components/Header";
import image1 from "assets/images/blog-main-1.jpg";
import image2 from "assets/images/blog-main-2.jpg";
import image3 from "assets/images/blog-main-3.jpg";
import { Link } from "react-router-dom";
import "./Blog.scss";
import Footer from "components/Footer";
import Button from "components/Button";

const ProductsServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="blog">
      <article className="main">
        <Header theme="white" />
        <section className="top container">
          <h1>Featured Posts</h1>
          <div className="cards">
            <div className="card">
              <img src={image1} alt="card" />
              <h3>The Future of Sustainable Bitcoin Mining</h3>
              <p>
                Explore how PowrAI is pioneering sustainable mining practices by
                leveraging renewable energy sources in Norway.
              </p>
            </div>
            <div className="card">
              <img src={image2} alt="card" />
              <h3>How MeasureX is Revolutionizing Crypto Mining</h3>
              <p>
                Discover the innovative features of MeasureX, PowrAI's
                proprietary software, designed to optimize mining efficiency.
              </p>
            </div>
            <div className="card">
              <img src={image3} alt="card" />
              <h3>Understanding Tokenized Ownership with PowrAI</h3>
              <p>
                Learn about the benefits of owning PowrAI Security Tokens and
                how they provide a stake in our mining operations.
              </p>
            </div>
          </div>
          <Link to="#">
            <Button>Read all posts</Button>
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default ProductsServices;
