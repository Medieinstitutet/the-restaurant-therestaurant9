import { useState } from "react";
import Calendar from "react-calendar";

export interface ICustomer {
  userName: string;
  userLastName: string;
  userEmail: string;
  userPhone: string;
}
export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICustomer;
}
export const Booking = (props: IBooking) => {
  const [date, setDate] = useState(new Date());
  const [booking, setBooking] = useState<IBooking>();

  function onChange(nextValue: any) {
    setDate(nextValue);
  }

  const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleChange = (userInput) => {
    setBooking(...booking, props.customer.userName: userInput)
  }

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
            <li key={amount}>{amount}</li>
          ))}
        </ul>
        <p>Datum</p>
        <Calendar value={date} onChange={onChange} showWeekNumbers />
        <p>Selected Date: {date?.toDateString()}</p>
        <p>Sittning</p>
        <ul>
          <li>18:00</li>
          <li>21:00</li>
        </ul>
        <h4>Kunduppgifter</h4>
        <p>Förnamn</p>
        <input type="text" className="bookingInput" value={props.customer.userName} onChange={(e) => handleChange(e.target.value)}/>
        <p>Efternamn</p>
        <input type="text" className="bookingInput" value={props.customer.userLastName} onChange={(e) => setCustomer(e.target.value)}/>
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
