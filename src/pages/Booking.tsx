import { useState } from "react";
import Calendar from "react-calendar";

export const Booking = () => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [date, setDate] = useState<Value>(new Date());

  const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <form className="bookingForm">
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
        <Calendar value={date} onChange={setDate} />
        <p>Selected Date: {date?.toString()}</p>
      </form>
    </>
  );
};
