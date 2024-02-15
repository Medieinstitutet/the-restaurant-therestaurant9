import axios from "axios";
import { IBooking } from "../models/IBooking";

export const handleCustomerSubmit = async (booking: IBooking) => {
  const response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/customer/create",
    {
      name: booking?.customer.userName,
      lastname: booking?.customer.userLastName,
      email: booking?.customer.userEmail,
      phone: booking?.customer.userPhone,
    }
  );
  console.log(response);
};
