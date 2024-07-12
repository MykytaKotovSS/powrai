import React, { useEffect } from "react";
import "./Faq.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const Faq = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="faq">
      <article className="main">
        <Header />
        <section className="top container">
          <h1>FAQ</h1>
          <div className="questions">
            <div className="question">
              <h3>What is PowrAI?</h3>
              <p>
                PowrAI is a crypto startup that empowers investors through
                sustainable bitcoin mining.
              </p>
            </div>
            <div className="question">
              <h3>How do I earn dividends?</h3>
              <p>
                By holding PowrAI Security Tokens, you gain ownership in our
                mining operations and receive dividends based on revenue.
              </p>
            </div>
            <div className="question">
              <h3>What is MeasureX?</h3>
              <p>
                MeasureX is our proprietary software that optimizes mining
                operations for maximum efficiency and profitability.
              </p>
            </div>
            <div className="question">
              <h3>How is PowrAI environmentally responsible?</h3>
              <p>
                We use renewable energy sources for our mining operations to
                minimize our carbon footprint.
              </p>
            </div>
            <div className="question">
              <h3>How can I purchase PowrAI Tokens?</h3>
              <p>
                PowrAI Security and Utility Tokens can be purchased through our
                official platform during the token sale period.
              </p>
            </div>
            <div className="question">
              <h3>What are the benefits of using PowrAI Utility Tokens?</h3>
              <p>
                Utility Tokens provide significant rebates on services like
                electricity, support, and mining equipment.
              </p>
            </div>
            <div className="question">
              <h3>How can I stay updated on PowrAI's progress?</h3>
              <p>
                Utility Tokens provide significant rebates on services like
                electricity, support, and mining equipment.
              </p>
            </div>
            <div className="question">
              <h3>How can I stay updated on PowrAI's progress?</h3>
              <p>
                Follow us on social media and subscribe to our newsletter for
                the latest updates and announcements.
              </p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Faq;
