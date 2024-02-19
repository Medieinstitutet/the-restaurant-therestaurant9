import { ShowAdminBookings } from "../components/ShowAdminBookings";
import { getAllBookings } from "../services/getAllBookings";
import { useEffect, useState, ChangeEvent } from "react";
import { getBookingsLS } from "../services/getBookingsLS";
import { setBookingsLS } from "../services/setBookingsLS";
import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { AdminSort } from "../components/AdminSort";

export const Admin = () => {
  const [adminBookings, setAdminBookings] = useState<IAdminBookingInfo[]>([]);

  useEffect(() => {
    if (adminBookings.length !== 0) return;

    const getBookings = async () => {
      let lsBookings = getBookingsLS();

      if (lsBookings?.length !== 0) {
        setAdminBookings(lsBookings);
        console.log(lsBookings);
      } else {
        const adminResponse = await getAllBookings();

        if (shouldUpdateBookings) {
          setAdminBookings(adminResponse.data);
          setBookingsLS(adminResponse.data);
        }
        console.log(adminResponse.data);
      }
    };

    let shouldUpdateBookings = true;

    getBookings();

    return () => {
      shouldUpdateBookings = false;
    };
  }, [adminBookings]);

  //nånting funkar inte riktigt här
  const handleAdminSort = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const filteredList: IAdminBookingInfo[] = adminBookings.filter(
      (adminBooking: IAdminBookingInfo) =>
        adminBooking.date === value + " 00:00:00"
    );
    setAdminBookings(filteredList);
    setBookingsLS(filteredList);
  };

  return (
    <div className="adminMainContainer">
      <section className="adminContainer">
        <h3>Bokningar</h3>
        <AdminSort handleAdminSort={handleAdminSort} />
        <div className="adminBookingsContainer">
          {adminBookings?.map((adminBooking) => {
            return (
              <ShowAdminBookings
                key={adminBooking._id}
                booking={adminBooking}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
