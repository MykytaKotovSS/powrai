import React, { useEffect } from "react";
import "./Tokenomics.scss";
import image from "assets/images/tokenomics-main-img.svg";
import Header from "components/Header";
import Footer from "components/Footer";
import { ReactComponent as Database } from "assets/icons/database.svg";
import { ReactComponent as CreditHeart } from "assets/icons/credit_card_heart.svg";
import { ReactComponent as BusinessCenter } from "assets/icons/business_center.svg";
import { ReactComponent as AwardStar } from "assets/icons/award_star.svg";
import { ReactComponent as Recycling } from "assets/icons/recycling.svg";

const Tokenomics = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="tokenomics">
      <article className="main">
        <Header />
        <section className="top container">
          <img src={image} alt="products" />
          <div className="group">
            <h1>Token Supply</h1>
            <div className="card">
              <p>Total Supply</p>
              <h3>2 Billion PowrAI Tokens</h3>
            </div>
            <div className="card">
              <p>Distribution Plan</p>
              <h3>To Infinity and Beyond</h3>
            </div>
          </div>
        </section>
      </article>
      <article className="utility">
        <section className="block container">
          <h1>Utility of PowrAI Tokens</h1>
          <h2>Security Token</h2>
          <div className="banner-wrapper">
            <div className="banner">
              <h3>Ownership and Revenue Sharing</h3>
              <p>
                PowrAI Security Token holders have direct ownership in our
                bitcoin mining infrastructure and receive dividends based on
                revenue.
              </p>
            </div>
            <div className="banner">
              <h3>Expansion Funding</h3>
              <p>
                Funds raised from the sale of Security Tokens are used to expand
                our mining facilities and operations.
              </p>
            </div>
          </div>
          <h2>Utility Token</h2>
          <div className="cards-wrapper">
            <div className="card">
              <BusinessCenter />
              <h3>Service Purchases</h3>
              <p>
                Use PowrAI Utility Tokens to buy electricity, support services,
                and mining equipment on our platform.
              </p>
            </div>
            <div className="card">
              <CreditHeart />
              <h3>Service Purchases</h3>
              <p>
                Use PowrAI Utility Tokens to buy electricity, support services,
                and mining equipment on our platform.
              </p>
            </div>
            <div className="card">
              <Database />
              <h3>Service Purchases</h3>
              <p>
                Use PowrAI Utility Tokens to buy electricity, support services,
                and mining equipment on our platform.
              </p>
            </div>
          </div>
        </section>
      </article>
      <article className="bottom">
        <section className="block container">
          <h1>Economic Model</h1>
          <div className="card">
            <Recycling />
            <div className="text">
              <h3>Buyback and Burn Program</h3>
              <p>
                A portion of the revenue is used to buy back and burn PowrAI
                tokens, reducing supply and increasing value.
              </p>
            </div>
          </div>
          <div className="card">
            <AwardStar />
            <div className="text">
              <h3>Staking Rewards</h3>
              <p>
                Understand how staking PowrAI Utility Tokens can earn you
                additional rewards and contribute to network security.
              </p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Tokenomics;
