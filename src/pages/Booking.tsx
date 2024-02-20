import { ChangeEvent, useState } from "react";
import { IBooking } from "../models/IBooking";
import { BookingCustomerData } from "../components/BookingCustomerData";
import { handleBookingSubmit } from "../services/handleBookingSubmit";
import { useNavigate } from "react-router-dom";
import { getAllBookings } from "../services/getAllBookings";
import { ShowBookingForm } from "../components/ShowBookingForm";

export const Booking = () => {
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

  const [isFull, setIsFull] = useState({
    table18Full: false,
    table21Full: false,
  });
  const [timeIsClicked, setTimeIsClicked] = useState<boolean>(false);

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const handleGuestClick = (amount: number) => {
    if (booking) {
      setBooking({ ...booking, numberOfGuests: amount });
    }
  };

  const calendarOnChange = async (nextValue: Value) => {
    setIsFull({
      table18Full: false,
      table21Full: false,
    });
    console.log(nextValue);
    if (booking && nextValue) {
      setBooking({ ...booking, date: nextValue?.toLocaleString() });
    }
    const bookingList = await getAllBookings();
    const bookingListChosenDate: IBooking[] = bookingList.data.filter(
      (booking: IBooking) => booking.date === nextValue?.toLocaleString()
    );
    // console.log(bookingListChosenDate);

    let tables18 = 0;
    let tables21 = 0;

    for (let i = 0; i < bookingListChosenDate.length; i++) {
      if (bookingListChosenDate[i].time === "18:00") {
        tables18 += Math.ceil(bookingListChosenDate[i].numberOfGuests / 6);
      } else {
        if (bookingListChosenDate[i].time === "21:00") {
          tables21 += Math.ceil(bookingListChosenDate[i].numberOfGuests / 6);
        }
      }
    }

    if (tables18 >= 15) {
      setIsFull({ ...isFull, table18Full: true });
    }
    if (tables21 >= 15) {
      setIsFull({ ...isFull, table21Full: true });
    }
    console.log(tables18, tables21);
  };

  const handleTimeClick = (timeSlot: string) => {
    if (booking) {
      setBooking({ ...booking, time: timeSlot });
    }
    setTimeIsClicked(true);
    // if (timeSlot === "18:00") {
    //   setTimeIsClicked({ ...timeIsClicked, time18Clicked: true });
    // } else {
    //   if (timeSlot === "21:00") {
    //     setTimeIsClicked({ ...timeIsClicked, time21Clicked: true });
    //   }
    // }
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

  const navigate = useNavigate();

  return (
    <ShowBookingForm
      booking={booking}
      handleGuestClick={handleGuestClick}
      calendarOnChange={calendarOnChange}
      handleTimeClick={handleTimeClick}
      handleChange={handleChange}
      isFull={isFull}
      timeIsClicked={timeIsClicked}
    />
    // <section className="bookingContainer">
    //   <form
    //     className="bookingForm"
    //     onSubmit={async (e) => {
    //       e.preventDefault();
    //       handleBookingSubmit(booking);
    //       const id = await handleBookingSubmit(booking);
    //       navigate("/pages/bookingconfirmation?bookingId=" + id.insertedId);
    //     }}
    //   >
    //     <h3>Boka</h3>
    //     <p>Antal gäster</p>
    //     <ul>
    //       {numberOfGuests.map((guests) => (
    //         <li
    //           key={guests.amount}
    //           onClick={() => handleGuestClick(guests.amount)}
    //           className={guestClass}
    //         >
    //           {guests.amount}
    //         </li>
    //       ))}
    //     </ul>
    //     <p>Datum</p>
    //     <Calendar value={date} onChange={calendarOnChange} showWeekNumbers />
    //     <p>Selected Date: {date.toDateString()}</p>
    //     <p>Sittning</p>
    //     <ul>
    //       {timeSlots.map((timeSlot) => (
    //         <li key={timeSlot} onClick={() => handleTimeClick(timeSlot)}>
    //           {timeSlot}
    //         </li>
    //       ))}
    //     </ul>
    //     <BookingCustomerData booking={booking} handleChange={handleChange} />
    //     <div className="bookingButtonContainer"></div>
    //   </form>
    //   <div className="bookingImageContainer">
    //     <section className="bookingTitleContainer">
    //       <p className="bookingTitle">Trattoria Gustoso</p>
    //     </section>
    //   </div>
    // </section>
  );
};
