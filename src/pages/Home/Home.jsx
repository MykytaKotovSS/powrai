import React, { useEffect } from "react";
import Header from "components/Header";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/logo-blue.svg";
import { ReactComponent as CardIcon1 } from "assets/icons/home-cards-1.svg";
import { ReactComponent as CardIcon2 } from "assets/icons/home-cards-2.svg";
import { ReactComponent as CardIcon3 } from "assets/icons/home-cards-3.svg";
import { ReactComponent as CardIcon4 } from "assets/icons/home-cards-4.svg";
import { ReactComponent as CardIcon5 } from "assets/icons/home-cards-5.svg";
import "./Home.scss";
import Footer from "components/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="home">
      <article className="main">
        <Header theme="white" />
        <section className="top container">
          <span>
            <Logo />
            PowrAI Token
          </span>
          <h1>
            Empowering Crypto Investors through Sustainable Bitcoin Mining
          </h1>
          <Link to="/products-services">
            <Button>Learn More</Button>
          </Link>
        </section>
      </article>
      <article className="cards container">
        <div className="row-one">
          <div className="card">
            <CardIcon1 />
            <h3>Tokenized Ownership</h3>
            <p>
              Invest in fractional shares of bitcoin mining infrastructure with
              PowrAI Security Tokens. Secure your stake in the future of digital
              currency.
            </p>
          </div>
          <div className="card">
            <CardIcon2 />
            <h3>MeasureX Software</h3>
            <p>
              Optimize your mining operations with MeasureX, our cutting-edge
              software leveraging AI and machine learning for maximum
              efficiency.
            </p>
          </div>
        </div>
        <div className="row-two">
          <div className="card">
            <CardIcon3 />
            <h3>Green Energy</h3>
            <p>
              PowrAI is committed to sustainability. Our mining operations
              utilize green energy from renewable sources, minimizing our carbon
              footprint.
            </p>
          </div>
          <div className="card">
            <CardIcon4 />
            <h3>Utility Token Rebates</h3>
            <p>
              Use PowrAI Utility Tokens to buy services like electricity,
              support, and mining equipment with significant rebates.
            </p>
          </div>
          <div className="card">
            <CardIcon5 />
            <h3>Revenue Sharing</h3>
            <p>
              Benefit from our transparent revenue-sharing model with PowrAI
              Security Tokens. Earn dividends based on the performance of our
              mining operations.
            </p>
          </div>
        </div>
      </article>
      <article className="mission">
        <section className="block container">
          <h1>PowrAI’s mission and values</h1>
          <div className="image"></div>
          <Link to="/about-us">
            <Button>See more about PowrAI’s</Button>
          </Link>
        </section>
      </article>
      <Footer theme="white" />
    </main>
  );
};

export default Home;
