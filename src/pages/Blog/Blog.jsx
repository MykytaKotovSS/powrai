import React, { useEffect } from "react";
import Header from "components/Header";
import image1 from "assets/images/blog-main-1.jpg";
import image2 from "assets/images/blog-main-2.jpg";
import image3 from "assets/images/blog-main-3.jpg";
import image4 from "assets/images/blog-bottom-1.jpg";
import image5 from "assets/images/blog-bottom-2.jpg";
import image6 from "assets/images/blog-bottom-3.jpg";
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
      <article className="bottom">
        <section className="top container">
          <h1>Additional Posts</h1>
          <div className="cards">
            <div className="card">
              <img src={image4} alt="card" />
              <div className="text">
                <h3>The Benefits of Using PowrAI Utility Tokens</h3>
                <p>
                  Find out how you can save on services like electricity and
                  mining equipment with PowrAI Utility Tokens.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={image5} alt="card" />
              <div className="text">
                <h3>Deep Dive into PowrAI's Staking Rewards</h3>
                <p>
                  Understand how staking PowrAI Utility Tokens can earn you
                  additional rewards and contribute to network security.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={image6} alt="card" />
              <div className="text">
                <h3>PowrAI's Commitment to Environmental Responsibility</h3>
                <p>
                  Read about our initiatives to reduce our carbon footprint and
                  promote sustainability in cryptocurrency mining.
                </p>
              </div>
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
