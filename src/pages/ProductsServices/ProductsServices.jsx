import React, { useEffect } from "react";
import Header from "components/Header";
import image1 from "assets/images/productsservices-main-img.svg";
import image2 from "assets/images/productsservices-bottom-1.jpg";
import image3 from "assets/images/productsservices-bottom-2.jpg";
import { ReactComponent as CardIcon1 } from "assets/icons/productsservices-cards-1.svg";
import { ReactComponent as CardIcon2 } from "assets/icons/productsservices-cards-2.svg";
import { ReactComponent as CardIcon3 } from "assets/icons/productsservices-cards-3.svg";
import { ReactComponent as CardIcon4 } from "assets/icons/productsservices-cards-4.svg";
import { ReactComponent as CardIcon5 } from "assets/icons/productsservices-cards-5.svg";
import "./ProductsServices.scss";
import Footer from "components/Footer";
import Button from "components/Button";

const ProductsServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="products-services">
      <article className="main">
        <Header />
        <section className="top container">
          <div className="row">
            <img src={image1} alt="products" />
            <div className="text">
              <h2>MeasureX Software</h2>
              <h3>
                MeasureX is PowrAI's proprietary software designed to optimize
                mining operations through advanced algorithms and machine
                learning.
              </h3>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <CardIcon1 />
              <h3>Real-Time Monitoring</h3>
              <p>
                Track performance metrics in real-time to make informed
                decisions.
              </p>
            </div>
            <div className="card">
              <CardIcon2 />
              <h3>Predictive Analytics</h3>
              <p>
                Leverage machine learning to forecast market trends and adjust
                strategies accordingly.
              </p>
            </div>
            <div className="card">
              <CardIcon3 />
              <h3>Automated Optimization</h3>
              <p>
                Automate hardware configuration, power management, and pool
                selection for optimal efficiency.
              </p>
            </div>
          </div>
        </section>
      </article>
      <article className="mining">
        <section className="group container">
          <div className="block">
            <h1>Green Mining</h1>
            <p>
              PowrAI is committed to using green energy for our mining
              operations, <br /> reducing our carbon footprint and promoting
              sustainability.
            </p>
          </div>
          <div className="block">
            <h2>Sustainability Efforts</h2>
            <div className="cards">
              <div className="card">
                <CardIcon4 />
                <h3>Renewable Energy</h3>
                <p>
                  Our data centers in Norway utilize renewable energy sources
                  such as hydro and wind power.
                </p>
              </div>
              <div className="card">
                <CardIcon5 />
                <h3>Environmental Responsibility</h3>
                <p>
                  We strive to minimize our impact on the environment through
                  sustainable practices and continuous innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className="bottom">
        <section className="block">
          <h1>Mining Hardware</h1>
          <div className="group">
            <img src={image2} alt="products" />
            <div className="cards">
              <div className="card">
                <h3>Details</h3>
                <p>
                  PowrAI uses state-of-the-art mining hardware to ensure maximum
                  efficiency and profitability.
                </p>
              </div>
              <div className="card">
                <h3>Specifications</h3>
                <p>
                  Learn more about the advanced technology behind our mining
                  operations.
                </p>
              </div>
            </div>
          </div>
          <Button>Learn more</Button>
        </section>
        <section className="block">
          <h1>Utility Services</h1>
          <div className="group">
            <div className="cards">
              <div className="card">
                <h3>Electricity and Support Services</h3>
                <p>
                  Use PowrAI Utility Tokens to purchase electricity and support
                  services with significant rebates.
                </p>
              </div>
              <div className="card">
                <h3>Mining Equipment</h3>
                <p>
                  Buy high-quality mining equipment using PowrAI Utility Tokens
                  at discounted rates.
                </p>
              </div>
            </div>
            <img src={image3} alt="products" />
          </div>
          <Button>Learn more</Button>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default ProductsServices;
