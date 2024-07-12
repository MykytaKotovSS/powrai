import React, { useEffect } from "react";
import "./Roadmap.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="roadmap">
      <article className="main">
        <Header />
        <section className="top container">
          <h1>Timeline</h1>
          <div className="quarters">
            <div className="item-container">
              <div className="item">
                <h3 className="quarter">Q1 2024</h3>
                <h3>
                  Launch of PowrAI Security and Utility Token sales and
                  initiation of MeasureX software development.
                </h3>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <h3 className="quarter">Q2 2024</h3>
                <h3>
                  Establishment of green mining facilities in Norway and
                  deployment of MeasureX.
                </h3>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <h3 className="quarter">Q3 2024</h3>
                <h3>
                  Launch of revenue-sharing model and first dividend
                  distribution to Security Token holders.
                </h3>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <h3 className="quarter">Q4 2024</h3>
                <h3>
                  Expansion of mining operations and integration of additional
                  green energy sources.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className="goals">
        <section className="block container">
          <div className="wrapper">
            <h1>Future Goals</h1>
            <div className="card">
              <h2>2025</h2>
              <p>
                Explore new markets and expand our ecosystem with additional
                partnerships and innovations.
              </p>
            </div>
            <div className="card">
              <h2>2026</h2>
              <p>
                Continue to improve and refine our green mining practices,
                aiming to become a leader in sustainable cryptocurrency mining.
              </p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Roadmap;
