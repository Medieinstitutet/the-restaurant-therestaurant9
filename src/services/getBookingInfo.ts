import axios from "axios";
import { insertedId } from "./handleBookingSubmit";
export const getBookingInfo = async () => {
  let responseInfo = await axios.get(
    `https://school-restaurant-api.azurewebsites.net/booking/${insertedId}`
  );

  const bookinginfo = responseInfo;
  console.log(bookinginfo.data);
  return bookinginfo;
};
// 65cf148328a1ef82111f99a5
