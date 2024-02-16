import axios from "axios";
import { IBooking } from "../models/IBooking";
import { TimeSlot } from "../models/TimeSlot";

export const handleBookingSubmit = async (booking: IBooking) => {
  const maxGuestsPerTable = 6;
  const maxTablePerTimeSlot = 15;
  const maxGuestsPerTimeSlot = maxGuestsPerTable * maxTablePerTimeSlot; //90
  const numberOfSeatsLeft = maxGuestsPerTimeSlot - booking.numberOfGuests;
  const numberOfTablesLeft = numberOfSeatsLeft / maxGuestsPerTable;

  if (booking.numberOfGuests > 6) {
  }

  //Hämta bokningar
  // const bookingsResponse = await axios.get(
  //   "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65cb31932b1f9164881776d0"
  // );
  // console.log(bookingsResponse);
  // const bookingList = bookingsResponse.data;

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
