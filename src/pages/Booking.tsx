import { ChangeEvent, useState } from "react";
import Calendar from "react-calendar";
import { IBooking } from "../models/IBooking";
import { BookingCustomerData } from "../components/BookingCustomerData";
import { handleBookingSubmit } from "../services/handleBookingSubmit";

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
          <button
            className="bookingButton"
            onClick={() => handleBookingSubmit(booking)}
          >
            Skicka
          </button>
        </div>
      </form>
    </>
  );
};
