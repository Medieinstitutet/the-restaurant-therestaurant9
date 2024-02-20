import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { IAdminCustomerInfo } from "../models/IAdminCustomerInfo";

interface IShowAdminBookingDetails {
  booking: IAdminBookingInfo;
  customer: IAdminCustomerInfo;
}

export const ShowAdminBookingDetails = ({
  booking,
  customer,
}: IShowAdminBookingDetails) => {
  return (
    <div className="adminBookingDetailsContainer">
      <h4>BokningsID: {booking._id}</h4>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <p>Antal gäster: {booking.numberOfGuests}</p>
      <p>Förnamn: {customer.name}</p>
      <p>Efternamn: {customer.lastname}</p>
      <p>Email: {customer.email}</p>
      <p>Telefonnummer: {customer.phone}</p>
    </div>
  );
};
