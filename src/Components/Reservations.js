import React, { useState, useRef } from "react";
import diningroom from "../images/diningroom.jpg";
import { sendForm, init } from "emailjs-com";
init("DlhTOjdE7Pqq5UJHA");

function Reservations() {
  const initialState = {
    lastname: "",
    amount: "",
    phone: "",
    date: "",
    time: "",
  };

  const inputEl = useRef();
  const [reservation, setReservation] = useState(initialState);
  
  const onSubmit = (e) => {
    e.preventDefault();
    sendForm("Carmellos_Reservation", "template_9oxce3q", inputEl.current).then(
      function (response) {
        setReservation(initialState);
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  const onChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="reservation-container">
        <h2 className="reservations">Reservations</h2>
        <p className="parag">
          For Reservations Please call 434 977 5200 or Please fill out the form
          Below.
        </p>

        <div
          className="container"
          style={{ backgroundImage: `url(${diningroom})` }}
          c
        >
          <p className="paragraph">
            Carmello's is open for dinner only. Our hours are Tuesday-Sunday from 5pm to 9:00pm
          </p>
          <p className="paragraph">
            We can accomadate a reservation of 2 people up to large parties. The
            restaurant is available for wedding rehearsals and private parties.
            Please contact Stella Hedges regarding large parties. Reservations
            are strongly urged on the Weekends and we do accept customers as
            walkins. For any reservation greater than 10 please call the
            restuarant directly.
          </p>
          <div className="form-div">
            <form
              className="reservation-form"
              ref={inputEl}
              onSubmit={onSubmit}
            >
              <label htmlFor="lastname">LastName</label>
              <input
                type="text"
                name="lastname"
                value={reservation.lastname}
                id="lastname"
                onChange={onChange}
                placeholder="Last Name"
                required
              />
              <label htmlFor="amount"> Amount of Guests</label>
              <input
                type="number"
                name="amount"
                value={reservation.amount}
                id="amount"
                onChange={onChange}
                placeholder="Amount of Guests"
                required
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={reservation.phone}
                id="phone"
                onChange={onChange}
                placeholder="Phone Number"
                required
              />
              <label htmlFor="date"> Day</label>
              <input
                type="date"
                name="date"
                value={reservation.day}
                id="date"
                onChange={onChange}
                placeholder="Date"
                required
              />
              <label htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
                value={reservation.time}
                id="time"
                onChange={onChange}
                min="17:00"
                max="21:00"
                placeholder="time"
                required
              />
              <div className="div-button">
                <button type="submit" name="submit">
                  Make Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;