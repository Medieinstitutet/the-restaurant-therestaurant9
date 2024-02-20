import { useEffect, useState } from "react";
import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { useParams } from "react-router-dom";
import { ShowAdminBookingDetails } from "../components/ShowAdminBookingDetails";
import { getBookingInfo } from "../services/getBookingInfo";
import axios from "axios";
import { IAdminCustomer } from "../models/IAdminCustomer";

export const AdminDetails = () => {
  const [adminBooking, setAdminBooking] = useState<IAdminBookingInfo>();
  const [customer, setCustomer] = useState<IAdminCustomer>();

  const { bookingId } = useParams();

  useEffect(() => {
    if (bookingId) {
      const getOneBooking = async () => {
        const clickedAdminBooking = await getBookingInfo(bookingId);
        setAdminBooking(clickedAdminBooking);

        const response = await axios.get<IAdminCustomer[]>(
          "https://school-restaurant-api.azurewebsites.net/customer/" +
            clickedAdminBooking.customerId
        );
        setCustomer(response.data[0]);
        console.log(response.data[0]);
      };

      if (!adminBooking) getOneBooking();
    }
  }, []);

  return (
    <div className="adminDetailsContainer">
      {adminBooking && customer && (
        <ShowAdminBookingDetails booking={adminBooking} customer={customer} />
      )}
    </div>
  );
};
