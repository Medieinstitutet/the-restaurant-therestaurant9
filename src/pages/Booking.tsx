import { ChangeEvent, useState } from "react";
import Calendar from "react-calendar";
import { IBooking } from "../models/IBooking";
import { BookingCustomerData } from "../components/BookingCustomerData";
import { handleBookingSubmit } from "../services/handleBookingSubmit";
import { Guest } from "../models/Guest";
import { TimeSlot } from "../models/TimeSlot";
import { getAllBookings } from "../services/getAllBookings";

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

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

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

  let guestClass = "";

  const timeSlots = [new TimeSlot("18:00", 15), new TimeSlot("21:00", 15)];
  const maxGuestsPerTable = 6;
  const maxTablePerTimeSlot = 15;
  const maxGuestsPerTimeSlot = maxGuestsPerTable * maxTablePerTimeSlot; //90
  const numberOfSeatsLeft = maxGuestsPerTimeSlot - booking.numberOfGuests;
  const numberOfTablesLeft = numberOfSeatsLeft / maxGuestsPerTable;

  const handleGuestClick = (amount: number) => {
    if (booking) {
      setBooking({ ...booking, numberOfGuests: amount });
    }
    let guestClass = "guestClicked";
  };

  const calendarOnChange = async (nextValue: Value) => {
    console.log(nextValue);
    if (booking && nextValue) {
      setBooking({ ...booking, date: nextValue?.toLocaleString() });
    }
    const bookingList = await getAllBookings();
    const bookingListChosenDate = bookingList.data.filter(
      (booking: IBooking) => booking.date === nextValue?.toLocaleString()
    );
    console.log(bookingListChosenDate);

    bookingListChosenDate.map((booking: IBooking) => {
      if (booking.time === "18:00") {
      }
    });
  };

  const handleTimeClick = (timeSlot: string) => {
    if (booking) {
      setBooking({ ...booking, time: timeSlot });
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

  console.log(booking);

  return (
    <section className="bookingContainer">
      <form
        className="bookingForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleBookingSubmit(booking);
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
        <Calendar
          value={booking.date}
          onChange={calendarOnChange}
          showWeekNumbers
        />
        <p>Selected Date: {booking.date.toString()}</p>
        <p>Sittning</p>
        <ul>
          {timeSlots.map((time) => (
            <li key={time.time} onClick={() => handleTimeClick(time.time)}>
              {time.time}
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
