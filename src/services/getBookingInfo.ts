import axios from "axios";

import { IAdminBookingInfo } from "../models/IAdminBookingInfo";

export const getBookingInfo = async (id: string) => {
  const response = await axios.get<IAdminBookingInfo[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/" + id
  );
  console.log(response.data);
  return response.data[0];
};
// 65cf148328a1ef82111f99a5
