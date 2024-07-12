import React, { useEffect } from "react";
import "./HowItWorks.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="how-it-works">
      <article className="main">
        <Header />
        <section className="top container">
          <h1>Step-by-Step Process</h1>
          <div className="quarters">
            <div className="item-container">
              <div className="item">
                <h2 className="quarter">01</h2>
                <div className="text">
                  <h3>Purchase PowrAI Tokens</h3>
                  <p>
                    Acquire PowrAI Security Tokens to gain fractional ownership
                    in our mining infrastructure and PowrAI Utility Tokens to
                    buy services on our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <h2 className="quarter">02</h2>
                <div className="text">
                  <h3>Gain Ownership</h3>
                  <p>
                    Your PowrAI Security Tokens represent ownership in our
                    bitcoin mining operations, entitling you to a share of the
                    revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <h2 className="quarter">03</h2>
                <div className="text">
                  <h3>Earn Dividends</h3>
                  <p>
                    Receive regular dividends based on the performance and
                    profitability of our mining operations through PowrAI
                    Security Tokens.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <h2 className="quarter">04</h2>
                <div className="text">
                  <h3>Optimize with MeasureX</h3>
                  <p>
                    Utilize MeasureX to enhance the efficiency of your mining
                    operations and maximize your returns.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <h2 className="quarter">05</h2>
                <div className="text">
                  <h3>Use Utility Tokens</h3>
                  <p>
                    Use PowrAI Utility Tokens to purchase electricity, support
                    services, and mining equipment at a significant rebate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default HowItWorks;
