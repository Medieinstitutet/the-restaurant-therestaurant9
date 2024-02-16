import { ChangeEvent, useState } from "react";
import { IBooking } from "../models/IBooking";
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

  // console.log(booking);
  console.log(timeIsClicked);

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
  );
};
