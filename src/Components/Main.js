import React from "react";
import table from "../images/table.jpg";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

function Main() {
  const props = useSpring({
    to: { opacity: 1, marginTop: 10 },
    from: { opacity: 0, marginTop: 0 },
    config: { duration: 4000, delay: 4000 },
  });

  const props2 = useSpring({
    to: { opacity: 1, marginTop: 40 },
    from: { opacity: 0, marginTop: 0 },
    config: { duration: 5000, delay: 6000 },
  });

  const props3 = useSpring({
    to: { opacity: 1, marginTop: 60 },
    from: { opacity: 0, marginTop: 0 },
    config: { duration: 5000, delay: 6000 },
  });

  return (
    <main>
      <animated.div style={props}>
        <div
          style={{ backgroundImage: `url(${table})` }}
          className="container-img"
        >
          <animated.div className="anim-div" style={props2}>
            <br />
            <br />
            <animated.h1 class="anim-h1" style={props2}>
              Welcome to Carmello's Ristorante & Wine Bar of Charlottesville
            </animated.h1>
            <animated.p className="anim-p" style={props3}>
              Serving Fine Northern Italian Cusine since 1987
            </animated.p>
            <animated.p className="anim-p2" style={props}>
              Extensive Wine List <br /> <br /> Old World Ambiance
            </animated.p>
            <animated.p className="anim-p3">
              Travel To Italy without a Passport!
            </animated.p>
          </animated.div>
          <div className="button-container">
            <Link to="/dinnermenu">
              <button className="cta-menu">
                {" "}
                Click here to see Dinner Menu
              </button>
            </Link>
          </div>
        </div>
      </animated.div>
    </main>
  );
}

export default Main;
