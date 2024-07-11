import React, { useEffect } from "react";
import Header from "components/Header";
import image from "assets/images/productsservices-main-img.svg";
import { ReactComponent as CardIcon1 } from "assets/icons/productsservices-cards-1.svg";
import { ReactComponent as CardIcon2 } from "assets/icons/productsservices-cards-2.svg";
import { ReactComponent as CardIcon3 } from "assets/icons/productsservices-cards-3.svg";
import "./ProductsServices.scss";

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
            <img src={image} alt="products" />
            <div className="text">
              <h2>MeasureX Software</h2>
              <h3>
                MeasureX is PowrAI's proprietary software designed to optimize
                mining operations through advanced algorithms and machine
                learning.
              </h3>
            </div>
          </div>
          <div className="row">
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
    </main>
  );
};

export default ProductsServices;
