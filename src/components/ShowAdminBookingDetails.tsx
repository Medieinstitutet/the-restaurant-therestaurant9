import { IAdminBookingInfo } from "../models/IAdminBookingInfo";

interface IShowAdminBookingDetails {
  booking: IAdminBookingInfo;
}

export const ShowAdminBookingDetails = ({
  booking,
}: IShowAdminBookingDetails) => {
  return (
    <div className="adminBookingDetailsContainer">
      <h4>BokningsID: {booking._id}</h4>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <p>Antal gäster: {booking.numberOfGuests}</p>
    </div>
  );
};
