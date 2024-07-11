import React from "react";
import Header from "components/Header";
import Button from "components/Button";
import { ReactComponent as Logo } from "assets/icons/logo-blue.svg";
import "./Home.scss";
import Footer from "components/Footer";

const Home = () => {
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
          <Button>Learn More</Button>
        </section>
      </article>
      <Footer theme="white"/>
    </main>
  );
};

export default Home;
