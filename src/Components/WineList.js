import React from "react";
import wine from "../images/winephoto.jpg";
import { Table } from "antd";
import { animated, useSpring } from "react-spring";

function WineList() {
  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -150 },
    config: { duration: 4000, delay: 6000 },
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "Category",
    },
    {
      title: "Vintage",
      dataIndex: "Vintage",
      key: "Vintage",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "Cinzano Asti",
      Category: "Sparkling Wine",
      Vintage: "NV",
      price: "$32",
    },
    {
      key: "2",
      name: "Cantine Maschio Prosecco",
      Category: "Sparkling Wine",
      Vintage: "NV",
      price: "$29",
    },
    {
      key: "3",
      name: "Lodali Nebbiolo D' Alba",
      Category: "Red Wine",
      Vintage: "2013",
      price: "$38",
    },

    {
      key: "4",
      name: "Rocche Costamagna Barolo",
      Category: "Red Wine",
      Vintage: "2011",
      price: "$83",
    },
    {
      key: "5",
      name: "Lodali Barbaresco ",
      Category: "Red Wine",
      Vintage: "2016",
      price: "$103",
    },
    {
      key: "6",
      name: "San Lorenzo Montelpulciano D'Abruzzo",
      Category: "Red Wine",
      Vintage: "2013",
      price: "$35",
    },
    {
      key: "7",
      name: "Corte alla Flora Vino Nobile D' Montepucliano",
      Category: "Red wine",
      Vintage: "2012",
      price: "$48",
    },
    {
      key: "8",
      name: "Lowry Hill Cabernet Sauvignon ",
      Category: "Red Wine",
      Vintage: "2013",
      price: "53",
    },
    {
      key: "9",
      name: "901 Summit Cabernet Sauvignon",
      Category: "Red Wine",
      Vintage: "2019",
      price: "$34",
    },
    {
      key: "10",
      name: "Breaux Vineyards Cabernet Sauvignon",
      Category: "Red Wine",
      Vintage: "2018",
      price: "48",
    },
    {
      key: "11",
      name: "La Cappuccina Madego Cabernet ",
      Category: "Red Wine",
      Vintage: "2014",
      price: "32",
    },
    {
      key: "12",
      name: "Corte Alla Flora Giuggiolo Rosso Toscano",
      Category: "Red Wine",
      Vintage: "2013",
      price: "35",
    },
    {
      key: "13",
      name: "Begali Lorenzo Amarone Della Valpolicella",
      Category: "Red Wine",
      Vintage: "2014",
      price: "$78",
    },
    {
      key: "14",
      name: "ColSanto Sagrantino di Montifalco",
      Category: "Red Wine",
      Vintage: "2013",
      price: "$45",
    },
    {
      key: "15",
      name: "Zonta Merlot ",
      Category: "Red Wine",
      Vintage: "2012",
      price: "$50",
    },
    {
      key: "16",
      name: "Musaragno Merlot",
      Category: "Red Wine",
      Vintage: "2014",
      price: "$34",
    },
    {
      key: "17",
      name: "Barboursville Cabernet Franc Reserve",
      Category: "Red Wine",
      Vintage: "2016",
      price: "$38",
    },
    {
      key: "18",
      name: "Ca'Bea Del Maniero",
      Category: "Red Wine",
      Vintage: "2016",
      price: "$30",
    },
    {
      key: "19",
      name: "Borgo salcetino",
      Category: "Red Wine",
      Vintage: "2016",
      price: "$42",
    },
    {
      key: "20",
      name: "I Fabri Terra di Lamole Chianti Classico",
      Category: "Red Wine",
      Vintage: "2017",
      price: "$42",
    },
    {
      key: "21",
      name: "Ruffino Riserva Ducale Chianti Classico Riserva",
      Category: "Red Wine",
      Vintage: "2012",
      price: "$45",
    },
    {
      key: "22",
      name: "Ruffino Riserva Ducale Chianti Classica Riserva Gold Label",
      Category: "Red Wine",
      Vintage: "2011",
      price: "$70",
    },
    {
      key: "23",
      name: "Tenuta San Guido Guidolberto",
      Category: "Red Wine",
      Vintage: "2016",
      price: "$138",
    },
    {
      key: "24",
      name: "Scapone Brunello di Montalcino",
      Category: "Red Wine",
      Vintage: "2013",
      price: "$88",
    },
    {
      key: "25",
      name: "Scapone Rosso Di Montalcino",
      Category: "Red Wine",
      Vintage: "2017",
      price: "$50",
    },
    {
      key: "26",
      name: "Bricco del Tuti Dolcetto D'Alba",
      Category: "Red Wine",
      Vintage: "2017",
      price: "38",
    },
    {
      key: "27",
      name: "Domaine Paul Autard Chatenuef du Pape",
      Category: "Red Wine",
      Vintage: "2010",
      price: "$75",
    },
    {
      key: "28",
      name: "Joseph Drouhin Beaujolais Villages",
      Category: "Red Wine",
      Vintage: "2013",
      price: "$35",
    },
    {
      key: "29",
      name: "Alsceti Syrah",
      Category: "Red Wine",
      Vintage: "2013",
      price: "$40",
    },
    {
      key: "30",
      name: "Chateau Famaey Malbec",
      Category: "Red Wine",
      Vintage: "2014",
      price: "$45",
    },
    {
      key: "31",
      name: "Castello di Bolgheri Bolgheri Superiore Super Tuscan",
      Category: "Red Wine",
      Vintage: "2017",
      price: "$180",
    },
    {
      key: "32",
      name: "Il Boro Suoer Tuscan",
      Category: "Red Wine",
      Vintage: "2016",
      price: "$110",
    },
    {
      key: "33",
      name: "Varvara Super Tuscan",
      Category: "Red Wine",
      Vintage: "2018",
      price: "$88",
    },
    {
      key: "34",
      name: "Capanelle Super Tuscan Solare",
      Category: "Red Wine",
      Vintage: "2007",
      price: "$123",
    },
    {
      key: "35",
      name: "Barboursville Pinot Grigio",
      Category: "White Wine",
      Vintage: "2013",
      price: "$35",
    },
    {
      key: "36",
      name: "Santa Margherita Pinot Grigio",
      Category: "White Wine",
      Vintage: "2015",
      price: "$51",
    },
    {
      key: "37",
      name: "Kaltern/Coldero Pinot Grigio",
      Category: "White Wine",
      Vintage: "2015",
      price: "$40",
    },
    {
      key: "38",
      name: "Casale Di Gigglio Satrico",
      Category: "White Wine",
      Vintage: "2015",
      price: "$38",
    },
    {
      key: "39",
      name: "La Cappucina Sauvignon Blanc",
      Category: "White Wine",
      Vintage: "2016",
      price: "$38",
    },
    {
      key: "40",
      name: "White Hall Vineyards Chardonnay",
      Category: "White Wine",
      Vintage: "2013",
      price: "$32",
    },
    {
      key: "41",
      name: "Giradet Chardonnay ",
      Category: "White Wine",
      Vintage: "2012",
      price: "$38",
    },
    {
      key: "42",
      name: "Lawry Hill Chardonnay",
      Category: "White Wine",
      Vintage: "2014",
      price: "$49",
    },
    {
      key: "43",
      name: "Barboursville Pinot Grigio",
      Category: "White Wine",
      Vintage: "2015",
      price: "$33",
    },
    {
      key: "44",
      name: "Volpetti Frascati",
      Category: "White Wine",
      Vintage: "2015",
      price: "$30",
    },
    {
      key: "45",
      name: "vignamato Verdicchio Classico Superiore",
      Category: "White Wine",
      Vintage: "2014",
      price: "$43",
    },
    {
      key: "46",
      name: "Barbi Orvieto Classico",
      Category: "White Wine",
      Vintage: "2014",
      price: "$34",
    },
    {
      key: "47",
      name: "Casale del Giglio Viogner",
      Category: "White Wine",
      Vintage: "2015",
      price: "$40",
    },
    {
      key: "48",
      name: "Salvano Gavi",
      Category: "White Wine",
      Vintage: "2014",
      price: "$36",
    },
    {
      key: "49",
      name: "Salvano Chardonnay",
      Category: "White Wine",
      Vintage: "2019",
      price: "$35",
    },
    {
      key: "50",
      name: "Lodali Moscato D'Asti",
      Category: "White Wine",
      Vintage: "2020",
      price: "$36",
    },
    {
      key: "51",
      name: "Lodali Chardonnay Langhe",
      Category: "White Wine",
      Vintage: "2019",
      price: "$33",
    },
    {
      key: "52",
      name: "La Cappucina Soave",
      Category: "White Wine",
      Vintage: "2019",
      price: "$30",
    },
    {
      key: "53",
      name: "Influence Riesling",
      Category: "White Wine",
      Vintage: "2016",
      price: "$38",
    },
    {
      key: "54",
      name: "Corte Alla Flora Giuggiolo Bianco",
      Category: "White Wine",
      Vintage: "2015",
      price: "$37",
    },
  ];
  return (
    <>
      <section
        className="wine-section"
        style={{
          backgroundImage: `url(${wine})`,
        }}
      >
        <animated.div style={props}>
          <h4 className="wine-heading">Carmellos Wine List</h4>

          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </animated.div>
      </section>
    </>
  );
}

export default WineList;