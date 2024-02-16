import axios from "axios";

export const getAllBookings = async () => {
  const bookingsResponse = await axios.get(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65cb31932b1f9164881776d0"
  );
  return bookingsResponse;
};
