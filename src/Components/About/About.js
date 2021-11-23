import React from "react";
import { Link } from "react-router-dom";
import profile2 from "../../images/profile2.jpeg";
import Typical from "react-typical";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="container main-about">
      <h2 className="titles">About me</h2>

      <section className="row">
        <div className="col-md-5 picture">
          <img src={profile2} alt="" />
        </div>

        <div className="col-md-7 text align-self-center">
          <div className="name-title">
            I'm Yeasir Arafat and I'm a {""}{" "}
            <span style={{ color: "yellow" }}>
              <Typical
                steps={["Web Developer.", 1000, "Web Designer.", 2000]}
                loop={Infinity}
                wrapper="b"
              />
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut
            voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam
            voluptatem nisi delectus. Facere explicabo hic minus accusamus alias
            fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam
            possimus veritatis, placeat, ab molestiae velit inventore
            exercitationem consequuntur blanditiis omnis beatae. Dolor iste
            excepturi ratione soluta quas culpa voluptatum repudiandae harum
            non.
          </p>

          <a className="resume" href="https://drive.google.com/u/0/uc?id=1Gb6aBoCyEdDA3UCJDQC7rnl01RK0yLpq&export=download">Download Resume <FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
        </div>
      </section>
    </div>
  );
};

export default About;
