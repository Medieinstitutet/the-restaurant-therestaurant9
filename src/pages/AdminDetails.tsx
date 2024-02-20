import { useEffect, useState } from "react";
import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { useParams } from "react-router-dom";
import { ShowAdminBookingDetails } from "../components/ShowAdminBookingDetails";
import { getBookingInfo } from "../services/getBookingInfo";

export const AdminDetails = () => {
  const [adminBooking, setAdminBooking] = useState<IAdminBookingInfo>();

  const { bookingId } = useParams();

  useEffect(() => {
    if (bookingId) {
      const getOneBooking = async () => {
        const clickedAdminBooking = await getBookingInfo(bookingId);
        setAdminBooking(clickedAdminBooking);
      };
      getOneBooking();
    }
  }, []);

  return (
    <div className="adminDetailsContainer">
      {adminBooking && <ShowAdminBookingDetails booking={adminBooking} />}
    </div>
  );
};
