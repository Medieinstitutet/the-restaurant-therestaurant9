import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { IAdminCustomer } from "../models/IAdminCustomer";

interface IShowAdminBookingDetails {
  booking: IAdminBookingInfo;
  customer: IAdminCustomer;
}

export const ShowAdminBookingDetails = ({
  booking,
  customer,
}: IShowAdminBookingDetails) => {
  console.log(customer.email);
  return (
    <div className="adminBookingDetailsContainer">
      <h4>BokningsID: {booking._id}</h4>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <p>Antal gäster: {booking.numberOfGuests}</p>
      <p> Förnamn: {customer?.name}</p>
      <p>Efternamn: {customer?.lastname}</p>
      <p>E-post: {customer.email}</p>
      <p>Telefonnummer: {customer?.phone}</p>
    </div>
  );
};
