import React from "react";
import Header from "components/Header";
import { ReactComponent as Logo } from "assets/icons/logo-blue.svg";
import "./About.scss";

const About = () => {
  return (
    <main className="about">
      <article className="main">
        <Header />
        <section className="mission container">
          <h1>Mission Statement</h1>
          <h3>
            PowrAI is dedicated to empowering investors through <br />
            sustainable and profitable bitcoin mining.
            <br /> Our mission is to democratize access to the lucrative world
            of <br />
            cryptocurrency mining while promoting environmental responsibility.
          </h3>
        </section>
        <section className="values container">
          <h1>Company Values</h1>
          <div className="cards">
            <div className="card">
              <h1>01</h1>
              <div className="text">
                <h3>Innovation</h3>
                <p>
                  We leverage cutting-edge technology to optimize mining
                  operations and maximize returns for our investors.
                </p>
              </div>
            </div>
            <div className="card">
              <h1>02</h1>
              <div className="text">
                <h3>Transparency</h3>
                <p>
                  We maintain open communication with our stakeholders and
                  provide clear, comprehensive info about our operations.
                </p>
              </div>
            </div>
            <div className="card">
              <h1>03</h1>
              <div className="text">
                <h3>Sustainability</h3>
                <p>
                  We prioritize the use of renewable energy sources to minimize
                  our environmental impact.
                </p>
              </div>
            </div>
            <div className="card">
              <h1>04</h1>
              <div className="text">
                <h3>Community</h3>
                <p>
                  We foster a strong, engaged community of investors, miners,
                  and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className="history">
        <div className="block container">
          <span>
            <Logo />
            PowrAI Token
          </span>
          <h1>Company History</h1>
          <p>
            Founded in 2023, PowrAI has rapidly grown to become a leader in
            sustainable bitcoin mining. Our innovative approach combines
            cutting-edge technology with a commitment to environmental
            responsibility, setting new standards in the industry.
          </p>
        </div>
      </article>
    </main>
  );
};

export default About;
