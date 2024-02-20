import { useEffect, useState } from "react";
import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { useParams } from "react-router-dom";
import { ShowAdminBookingDetails } from "../components/ShowAdminBookingDetails";
import { getBookingInfo } from "../services/getBookingInfo";
import { IAdminCustomerInfo } from "../models/IAdminCustomerInfo";
import { getCustomerInfo } from "../services/getCustomerInfo";

export const AdminDetails = () => {
  const [adminBooking, setAdminBooking] = useState<IAdminBookingInfo>();
  const [adminCustomer, setAdminCustomer] = useState<IAdminCustomerInfo>();

  const { bookingId } = useParams();

  useEffect(() => {
    if (bookingId) {
      const getOneBooking = async () => {
        const clickedAdminBooking = await getBookingInfo(bookingId);
        setAdminBooking(clickedAdminBooking);
        getOneBooking();
      };

      // getCustomerInfo(adminBooking.customerId).then((response) => {
      //   setAdminCustomer(response);
      // });
    }

    // if (adminBooking) {
    //   const getOneCustomer = async () => {
    //     const clickedAdminCustomer = await getCustomerInfo(
    //       adminBooking?.customerId
    //     );
    //     setAdminCustomer(clickedAdminCustomer);
    //   };
    //   getOneCustomer();
    // }
  }, []);

  return (
    <div className="adminDetailsContainer">
      {adminBooking && adminCustomer && (
        <ShowAdminBookingDetails
          booking={adminBooking}
          customer={adminCustomer}
        />
      )}
    </div>
  );
};
