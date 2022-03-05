import React from "react";
import picture from "../images/momanddad.jpg";

function About() {
  return (
    <div className="wrapper">
      <h3 className="about">About us</h3>
      <div className="img-container">
        <img className="img" src={picture} alt="" />
      </div>
      <div className="about-paragraph">
        <p>
          Carmello's was founded by Bill & Stella Hedges who are seasoned
          restauranteurs in 1987 in Manassas, Virginia. They featured Fine
          Northern Italian Cuisine.
          <br />
          The restaurant was i9mmediately a tremendous success. They won many
          awards like the Silver spoon award and have every paper including the
          Washington Post to write an article
          <br />
          about the restaurant. The Washington Post called it "A Jewel Worth the
          Journey". Bill & Stella were looking to move to a city like
          Charlottesville to <br />
          raise their two children. The restaurant was sold in 1992. In 1992
          Bill & Stella open Carmellos of Charlottesville(used to be located
          across from John Paul Jones Arena)
          <br />
          The wanted to bring Carmello's to Charlottesville for their customers
          to experience a quaint Italian restaurant offering authentic Northern
          Italian cuisine with a great winelist. <br />
          professional service with a old world atmosphere. The restaurant over
          the last 30 years of fruition has developed a great clientele and they
          are greatly appreciated. <br /> Bill has retired and Stella runs the
          day to day operations as well as being the chef of the restaurant.
          Bill & Stella welcomes you to experience a great dining experience.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
