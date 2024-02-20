import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { useNavigate } from "react-router-dom";

interface IShowAdminBookings {
  booking: IAdminBookingInfo;
  removeBooking: (_id: string) => void;
}

export const ShowAdminBookings = ({
  booking,
  removeBooking,
}: IShowAdminBookings) => {
  const navigate = useNavigate();
  return (
    <div className="adminBookingContainer">
      <h4>BokningsID: {booking._id}</h4>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <p>Antal gäster: {booking.numberOfGuests}</p>
      <div className="adminButtonContainer">
        <button
          onClick={() => {
            navigate("/pages/admin/" + booking._id);
          }}
        >
          Visa
        </button>
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
