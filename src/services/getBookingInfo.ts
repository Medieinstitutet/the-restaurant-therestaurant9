import axios from "axios";

export const getBookingInfo = async () => {
  const response = await axios.get(
    "https://school-restaurant-api.azurewebsites.net/booking/:id"
  );
  console.log(response.data);
};
