import { useState } from "react";
import Calendar from "react-calendar";

export const Booking = () => {
  const [date, setDate] = useState(new Date());

  function onChange(nextValue: any) {
    setDate(nextValue);
  }

  const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <form
        className="bookingForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3>Boka</h3>
        <p>Antal gäster</p>
        <ul>
          {numberOfGuests.map((amount) => (
            <li>{amount}</li>
          ))}
        </ul>
        <p>Sittning</p>
        <ul>
          <li>18:00</li>
          <li>21:00</li>
        </ul>
        <p>Datum</p>
        <Calendar value={date} onChange={onChange} showWeekNumbers />
        <p>Selected Date: {date?.toDateString()}</p>
        <p>Förnamn</p>
        <input type="text" className="bookingInput" />
        <p>Efternamn</p>
        <input type="text" className="bookingInput" />
        <p>Email</p>
        <input type="email" className="bookingInput" />
        <p>Telefon</p>
        <input type="text" className="bookingInput" />
        <div className="bookingButtonContainer">
          <button className="bookingButton">Skicka</button>
        </div>
      </form>
    </>
  );
};
