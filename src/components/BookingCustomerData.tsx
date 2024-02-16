import { IBooking } from "../models/IBooking";
import { ChangeEvent } from "react";

export interface IBookingCustomerData {
  booking: IBooking;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  timeIsClicked: boolean;
}

export const BookingCustomerData = ({
  booking,
  handleChange,
  timeIsClicked,
}: IBookingCustomerData) => {
  return (
    <div
      className={
        timeIsClicked
          ? "bookingCustomerDataContainer"
          : "bookingCustomerDataContainerHidden"
      }
    >
      <h4>Kunduppgifter</h4>
      <p>Förnamn</p>
      <input
        type="text"
        className="bookingInput"
        value={booking?.customer.userName}
        onChange={handleChange}
        name="userName"
        required
      />
      <p>Efternamn</p>
      <input
        type="text"
        className="bookingInput"
        value={booking?.customer.userLastName}
        onChange={handleChange}
        name="userLastName"
        required
      />
      <p>Email</p>
      <input
        type="email"
        className="bookingInput"
        value={booking?.customer.userEmail}
        onChange={handleChange}
        name="userEmail"
        required
      />
      <p>Telefon</p>
      <input
        type="text"
        className="bookingInput"
        value={booking?.customer.userPhone}
        onChange={handleChange}
        name="userPhone"
        required
      />
    </div>
  );
};
