import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <Header />
      <div className="iframe-container">
        <iframe loading="lazy" src="https://registry.jsonresume.org/ncastaldi?theme=elegant" title="MyRes"></iframe>
     </div>

      <Footer />
    </>
  );
};

export default Resume;
