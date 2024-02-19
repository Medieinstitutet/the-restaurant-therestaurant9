import { IAdminBookingInfo } from "../models/IAdminBookingInfo";

interface IShowAdminBookings {
  booking: IAdminBookingInfo;
}

export const ShowAdminBookings = ({ booking }: IShowAdminBookings) => {
  return (
    <div className="adminBookingContainer">
      <h4>BokningsID: {booking._id}</h4>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <p>Antal gäster: {booking.numberOfGuests}</p>
      <div className="adminButtonContainer">
        <button>Visa</button>
        <button>Radera</button>
      </div>
    </div>
  );
};
