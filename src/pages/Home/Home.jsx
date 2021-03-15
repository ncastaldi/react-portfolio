import React from "react";
import Header from "../../components/Header/Header";
import profilePic from "../../images/profile.jpg";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container-fluid row" id="dynamicContent">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <img id="profilePic" src={profilePic} alt="Profile Pic" />
        </div>
        <div className="col-md-4" id="aboutText">
          <h1>Hi, I'm Nathan</h1>
          <h4>
            After 15 years in various IT roles, I am starting my web development
            journey!
          </h4>
          <h5>Feel free to view selected work in my portfolio.</h5>
        </div>

        <div className="development-icons">
          <div>
            <i className="devicon-bootstrap-plain null"></i>
            <p>Bootstrap</p>
          </div>
          <div>
            <i className="devicon-css3-plain null"></i>
            <p>CSS 3</p>
          </div>
          <div>
            <i className="devicon-express-original null"></i>
            <p>Express</p>
          </div>
          <div>
            <i className="devicon-handlebars-plain null"></i>
            <p>Handlebars</p>
          </div>
          <div>
            <i className="devicon-heroku-original null"></i>
            <p>Heroku</p>
          </div>
          <div>
            <i className="devicon-html5-plain null"></i>
            <p>HTML 5</p>
          </div>
          <div>
            <i className="devicon-javascript-plain null"></i>
            <p>JavaScript</p>
          </div>
          <div>
            <i className="devicon-jquery-plain null"></i>
            <p>jQuery</p>
          </div>
          <div>
            <i className="devicon-mongodb-plain null"></i>
            <p>Mongo DB</p>
          </div>
          <div>
            <i className="devicon-mysql-plain null"></i>
            <p>MySQL</p>
          </div>
          <div>
            <i className="devicon-nodejs-plain null"></i>
            <p>Node JS</p>
          </div>
          <div>
            <i className="devicon-react-original null"></i>
            <p>React</p>
          </div>
          <div>
            <i className="devicon-sequelize-plain null"></i>
            <p>Sequelize</p>
          </div>
        </div>
        <div className="col-md-1"></div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
