import axios from "axios";
import { IBooking } from "../models/IBooking";

export const handleBookingSubmit = async (booking: IBooking) => {
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
  console.log(response);
};
