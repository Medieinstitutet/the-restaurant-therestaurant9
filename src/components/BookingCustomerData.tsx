import { IBooking } from "../models/IBooking";
import { ChangeEvent } from "react";

export interface IBookingCustomerData {
  booking: IBooking;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BookingCustomerData = ({
  booking,
  handleChange,
}: IBookingCustomerData) => {
  return (
    <>
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
    </>
  );
};
