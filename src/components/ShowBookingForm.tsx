import { Guest } from "../models/Guest";
import { IBooking } from "../models/IBooking";
import { handleBookingSubmit } from "../services/handleBookingSubmit";
import Calendar from "react-calendar";
import { ChangeEvent } from "react";
import { BookingCustomerData } from "./BookingCustomerData";
import { BookingTimeOption } from "./BookingTimeOption";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface IShowBookingForm {
  booking: IBooking;
  handleGuestClick: (amount: number) => void;
  calendarOnChange: (nextValue: Value) => void;
  handleTimeClick: (timeSlot: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isFull: {
    table18Full: boolean;
    table21Full: boolean;
  };
  timeIsClicked: boolean;
}
export const ShowBookingForm = ({
  booking,
  handleGuestClick,
  calendarOnChange,
  handleTimeClick,
  handleChange,
  isFull,
  timeIsClicked,
}: IShowBookingForm) => {
  const guests = [
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

  let guestClass = "guestAmount";

  return (
    <>
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
            {guests.map((guests) => (
              <li
                key={guests.amount}
                onClick={() => handleGuestClick(guests.amount)}
                className={guestClass}
              >
                {guests.amount}
              </li>
            ))}
          </ul>
          <p className="pTag">
            Selected amount of guests: {booking.numberOfGuests}
          </p>
          <p>Datum</p>
          <Calendar
            value={booking.date}
            onChange={calendarOnChange}
            showWeekNumbers
          />
          <p className="pTag">Selected Date: {booking.date}</p>
          <BookingTimeOption
            booking={booking}
            handleTimeClick={handleTimeClick}
            isFull={isFull}
          />
          <BookingCustomerData
            booking={booking}
            handleChange={handleChange}
            timeIsClicked={timeIsClicked}
          />
          <div className="bookingButtonContainer">
            <button className="bookingButton" disabled={!timeIsClicked}>
              Skicka
            </button>
          </div>
        </form>
        <div className="bookingImageContainer">
          <section className="bookingTitleContainer">
            <p className="bookingTitle">Trattoria Gustoso</p>
          </section>
        </div>
      </section>
    </>
  );
};
