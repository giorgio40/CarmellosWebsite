import React from "react";
import dining from "../images/diningroom2.jpg";
import { animated, useSpring } from "react-spring"

function Dinner() {

  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -150 },
    config: { duration: 6000, delay: 6000 },
  });


  return (
    <div 
      className="background"
      style={{
        backgroundImage: `url(${dining})`,
      }}
    >
      <animated.div style={props}>
      <h3 className="dinner-header">Carmello's Dinner Menu</h3>
      <h4 className="section">Antipasti</h4>
      <p className="item">
        Carciofi Fritti $10 <br />
      </p>
      <p className="item-description">
        3 large artichoke hearts, stuffed with mozarella cheese, breaded, served
        with house tomato sauce.
      </p>
      <p className="item">Baked Brie Cheese $10 </p>
      <p className="item-description">
        Brie cheese, almonds, amareto and honey{" "}
      </p>
      <p className="item">Zuppa di Cozze $10</p>
      <p className="item-description">
        Prince Edward Island mussels, white wine or red sauce.
      </p>
      <p className="item">Caprese $12</p>
      <p className="item-description">
        Fresh Mozzarella,sliced tomato, olive oil and basalmic glaze.
      </p>
      <p className="item">Clams Casino $12</p>
      <p className="item-description">
        Top neck clams, butter, bacon, herbs, bell pepper
      </p>
      <p className="item">Calamari Fritti $10</p>
      <p className="item-description">
        Fresh calamari, floured, fried, marinara sauce
      </p>
      <p className="item">Stuffed Mushroom Caps $12</p> mushrooms, crab
      <p className="item-description">Creminimeat stuffing, herbs, butter</p>
      <h4 className="section">Zuppe</h4>
      <p className="item">Tortellini en Brodo 6.5</p>
      <p className="item-description"> Veal tortellini, chicken broth </p>
      <p className="item">Straccitella Alla Romana $6.5</p>
      <h4 className="section">Secondo </h4>
      <p className="item">Ravioli Cardinale $30</p>
      <p className="item-description">
        Lobster Ravioli, Crema Rosa sauce, caviar, lump crabmeat
      </p>
      <p className="item">Cannelloni Alla Toscana $20</p>
      <p className="item-description">
        Seasoned Veal wrapped in pasta, cream sauce, mozzarella
      </p>
      <p className="item"> Tortellini Panna $19</p>
      <p className="item-description">
        Veal Tortellini, cream sauce, proscuito, mushrooms, peas
      </p>
      <p className="item">Lasagna Alla Bolognese $18</p>
      <p className="item-description">
        Pasta Layers, ricotta cheese, meatsauce, mozarella
      </p>
      <p className="item">Linguine Pescatore $32</p>
      <p className="item-description">
        Mussels, clams, bay scallops, shrimp, calamari, marinara sauce, linguini{" "}
      </p>
      <p className="item">Scampi Gamberi $26</p>
      <p className="item-description">
        Jumbo shrimp, butter, garlic, white wine, parsley, lemon, linguini
      </p>
      <p className="item-">Carne Carmello Chicken-$21 veal-24</p>
      <p className="item-description">
        {" "}
        Chicken or Veal, mushrooms,peas, spring onion, diced tomato, marsala
        wine sauce
      </p>
      <p className="item">Parmigiane Veal-$21 Chicken-$18 Eggplant-$17</p>
      <p className="item-description">
        Veal, chicken, or eggplant, breaded, tomato sauce, mozzarella cheese,
        capellini{" "}
      </p>
      <p className="item">Ravioli Fiorentini $18</p>
      <p className="item-description">Cheese Ravioli, cream sauce, spinach</p>
      <p className="item">Linguini Vongole $26</p>
      <p className="item-description">littleneck clams, white or red sauce, linguini </p>
      <p className="item">Pollo Tirolese $23</p>
      <p className="item-description">Chicken breast, crabmeat stuffing, sliced artichoke hearts, mozzarella, lemon butter sauce, capellini </p>
      <p className="item">Saltamboca alla Romana $27</p>
      <p className="item-description">Veal medallions, sage, proscuito, mozzarella, demi-glace</p>
      <p className="item-description">All Entrees come with bread & butter and a house salad with our homeade creamy Italian dill dressing</p>
    </animated.div>
  </div>
  );
}

export default Dinner;
