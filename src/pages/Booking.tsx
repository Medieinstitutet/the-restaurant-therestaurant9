import { ChangeEvent, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";

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
export const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [booking, setBooking] = useState<IBooking>({
    restaurantId: "",
    date: "",
    time: "",
    numberOfGuests: 0,
    customer: {
      userName: "",
      userLastName: "",
      userEmail: "",
      userPhone: "",
    },
  });

  const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const timeSlots = ["18:00", "21:00"];

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  function onChange(nextValue: Value) {
    console.log(nextValue);
    if (booking && nextValue) {
      setBooking({ ...booking, date: nextValue?.toLocaleString() });
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyName = e.target.name;
    if (booking) {
      setBooking({
        ...booking,
        customer: { ...booking?.customer, [propertyName]: e.target.value },
      });
    }
  };

  const handleTimeClick = (timeSlot: string) => {
    if (booking) {
      setBooking({ ...booking, time: timeSlot });
    }
  };

  const handleGuestClick = (amount: number) => {
    if (booking) {
      setBooking({ ...booking, numberOfGuests: amount });
    }
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      "https://school-restaurant-api.azurewebsites.net/booking/create",
      {
        restaurantId: "65cb31932b1f9164881776d0",
        date: booking?.date,
        time: booking?.time,
        numberOfGuests: booking?.numberOfGuests,
        customer: {
          name: booking?.customer.userName,
          lastname: booking?.customer.userLastName,
          email: booking?.customer.userEmail,
          phone: booking?.customer.userPhone,
        },
      }
    );
    console.log(response);
  };

  console.log(booking);

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
            <li key={amount} onClick={() => handleGuestClick(amount)}>
              {amount}
            </li>
          ))}
        </ul>
        <p>Datum</p>
        <Calendar value={date} onChange={onChange} showWeekNumbers />
        <p>Selected Date: {date.toDateString()}</p>
        <p>Sittning</p>
        <ul>
          {timeSlots.map((timeSlot) => (
            <li key={timeSlot} onClick={() => handleTimeClick(timeSlot)}>
              {timeSlot}
            </li>
          ))}
        </ul>
        <h4>Kunduppgifter</h4>
        <p>Förnamn</p>
        <input
          type="text"
          className="bookingInput"
          value={booking?.customer.userName}
          onChange={handleChange}
          name="userName"
        />
        <p>Efternamn</p>
        <input
          type="text"
          className="bookingInput"
          value={booking?.customer.userLastName}
          onChange={handleChange}
          name="userLastName"
        />
        <p>Email</p>
        <input
          type="email"
          className="bookingInput"
          value={booking?.customer.userEmail}
          onChange={handleChange}
          name="userEmail"
        />
        <p>Telefon</p>
        <input
          type="text"
          className="bookingInput"
          value={booking?.customer.userPhone}
          onChange={handleChange}
          name="userPhone"
        />
        <div className="bookingButtonContainer">
          <button className="bookingButton" onClick={handleSubmit}>
            Skicka
          </button>
        </div>
      </form>
    </>
  );
};
