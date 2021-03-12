import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import projects from "./projects";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="container-fluid row">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
