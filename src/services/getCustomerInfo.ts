import axios from "axios";
import { IAdminCustomerInfo } from "../models/IAdminCustomerInfo";

export const getCustomerInfo = async (id: string) => {
  const response = await axios.get<IAdminCustomerInfo[]>(
    "https://school-restaurant-api.azurewebsites.net/customer/" + id
  );
  return response.data[0];
};
