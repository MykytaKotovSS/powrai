import React, { useEffect } from "react";
import "./Tokenomics.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const Tokenomics = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="tokenomics">
      <article className="main">
        <Header />
        <h1>Token</h1>
      </article>
      <Footer />
    </main>
  );
};

export default Tokenomics;
