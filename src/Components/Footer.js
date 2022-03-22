import React from "react";

function Footer() {
  return (
    <>
    <section className="footer">
      <section className="footer-name">
        Carmellos Ristorante & Wine Bar of Charlottesville
      </section>
      <section className="footer-hours">
        Hours:
        <br /> closed Monday <br />
        Open for Dinner Tuesday through Sunday from 5p.m. to 9p.m.
        <br /> We are located at 400 Twenty-Ninth Place Ct. Charlottesville,
        Virginia 22901
        <br />
        <section className="footer-number"> Phone: 434 977 5200</section>
        <section className="copyright">  &#169; Tech Solutions Inc.</section>
        <section className="social-media">
          <a className="social-icon" href="http://https://www.facebook.com/CarmellosRestaurant">
            <ion-icon name="logo-facebook"></ion-icon>      
          </a>
         </section>
      </section>
      <section className="footer-contact">
        <a href="mailto: georgehatzigeorgio@gmail.com">Contact Us </a>
      </section>
    </section>
  </>
  );
}

export default Footer;
