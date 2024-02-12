import Calendar from "react-calendar";
import { useState } from "react";

export const Booking = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <form className="bookingForm">
        <h3>Boka</h3>
        <p>Antal gäster</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
        </ul>
        <p>Sittning</p>
        <ul>
          <li>18:00</li>
          <li>21:00</li>
        </ul>
        <p>Datum</p>
        <Calendar value={date} />
      </form>
    </>
  );
};
