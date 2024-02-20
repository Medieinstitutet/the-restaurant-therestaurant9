import { IAdminBookingInfo } from "../models/IAdminBookingInfo";

interface IShowAdminBookings {
  booking: IAdminBookingInfo;
  removeBooking: (_id: string) => void;
}

export const ShowAdminBookings = ({
  booking,
  removeBooking,
}: IShowAdminBookings) => {
  return (
    <div className="adminBookingContainer">
      <h4>BokningsID: {booking._id}</h4>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <p>Antal gäster: {booking.numberOfGuests}</p>
      <div className="adminButtonContainer">
        <button>Visa</button>
        <button
          onClick={() => {
            removeBooking(booking._id);
          }}
        >
          Radera
        </button>
      </div>
    </div>
  );
};
