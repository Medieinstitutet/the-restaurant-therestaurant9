import { ChangeEvent, useState } from "react";
import Calendar from "react-calendar";
import { IBooking } from "../models/IBooking";
import { BookingCustomerData } from "../components/BookingCustomerData";
import { handleBookingSubmit } from "../services/handleBookingSubmit";
import { Guest } from "../models/Guest";
import { useNavigate } from "react-router-dom";

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

  const numberOfGuests = [
    new Guest(1, false),
    new Guest(2, false),
    new Guest(3, false),
    new Guest(4, false),
    new Guest(5, false),
    new Guest(6, false),
    new Guest(7, false),
    new Guest(8, false),
    new Guest(9, false),
    new Guest(10, false),
    new Guest(11, false),
    new Guest(12, false),
  ];
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const timeSlots = ["18:00", "21:00"];

  let guestClass = "";

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const calendarOnChange = (nextValue: Value) => {
    console.log(nextValue);
    if (booking && nextValue) {
      setBooking({ ...booking, date: nextValue?.toLocaleString() });
    }
  };

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
    guestClass = "guestClicked";
  };
  const navigate = useNavigate();
  console.log(booking);

  return (
    <section className="bookingContainer">
      <form
        className="bookingForm"
        onSubmit={async (e) => {
          e.preventDefault();
          handleBookingSubmit(booking);
          const id = await handleBookingSubmit(booking);
          navigate("/pages/bookingconfirmation?bookingId=" + id.insertedId);
        }}
      >
        <h3>Boka</h3>
        <p>Antal gäster</p>
        <ul>
          {numberOfGuests.map((guests) => (
            <li
              key={guests.amount}
              onClick={() => handleGuestClick(guests.amount)}
              className={guestClass}
            >
              {guests.amount}
            </li>
          ))}
        </ul>
        <p>Datum</p>
        <Calendar value={date} onChange={calendarOnChange} showWeekNumbers />
        <p>Selected Date: {date.toDateString()}</p>
        <p>Sittning</p>
        <ul>
          {timeSlots.map((timeSlot) => (
            <li key={timeSlot} onClick={() => handleTimeClick(timeSlot)}>
              {timeSlot}
            </li>
          ))}
        </ul>
        <BookingCustomerData booking={booking} handleChange={handleChange} />
        <div className="bookingButtonContainer">
          <button className="bookingButton">Skicka</button>
        </div>
      </form>
      <div className="bookingImageContainer">
        <section className="bookingTitleContainer">
          <p className="bookingTitle">Trattoria Gustoso</p>
        </section>
      </div>
    </section>
  );
};
