import axios from "axios";
import { IBooking } from "../models/IBooking";

export const handleBookingSubmit = async (booking: IBooking) => {
  //Hämta bokningar

  // if (numberOfSeatsLeft < booking.numberOfGuests) {
  //   return;
  // } else {
  //   if (numberOfTablesLeft < 1) {
  //     return;
  //   } else {
  //   }
  // }

  const response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/booking/create",
    {
      restaurantId: "65cb31932b1f9164881776d0",
      date: booking?.date,
      time: booking?.time,
      numberOfGuests: booking?.numberOfGuests,
      customer: {
        name: booking?.customer.userName,
        lastname: booking?.customer.userLastName,
        email: booking?.customer.userEmail,
        phone: booking?.customer.userPhone,
      },
    }
  );

  //Lägga till customer submit här?

  console.log(response);
};