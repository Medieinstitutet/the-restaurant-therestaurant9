import { ShowAdminBookings } from "../components/ShowAdminBookings";
import { getAllBookings } from "../services/getAllBookings";
import { useEffect, useState, ChangeEvent } from "react";
import { IAdminBookingInfo } from "../models/IAdminBookingInfo";
import { AdminSort } from "../components/AdminSort";
import axios from "axios";

export const Admin = () => {
  const [adminBookings, setAdminBookings] = useState<IAdminBookingInfo[]>([]);
  const [adminFilterBookings, setAdminFilterBookings] = useState<
    IAdminBookingInfo[]
  >([]);

  useEffect(() => {
    if (adminBookings.length !== 0) return;

    const getBookings = async () => {
      const adminResponse = await getAllBookings();

      if (shouldUpdateBookings) {
        setAdminBookings(adminResponse.data);
        setAdminFilterBookings(adminResponse.data);
      }
      console.log(adminResponse.data);
    };

    let shouldUpdateBookings = true;

    getBookings();

    return () => {
      shouldUpdateBookings = false;
    };
  }, [adminBookings]);

  const handleAdminSort = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(adminBookings);

    let value = e.target.value;
    const filteredList: IAdminBookingInfo[] = adminBookings.filter(
      (adminBooking: IAdminBookingInfo) =>
        adminBooking.date === value + " 00:00:00"
    );
    setAdminFilterBookings(filteredList);
    console.log(adminBookings);
  };

  const removeBooking = async (_id: string) => {
    const response = await axios.delete(
      "https://school-restaurant-api.azurewebsites.net/booking/delete/" + _id
    );
    console.log(response.status);
  };

  const resetAdminSort = () => {
    setAdminFilterBookings(adminBookings);
  };

  return (
    <div className="adminMainContainer">
      <section className="adminContainer">
        <h3>Bokningar</h3>
        <AdminSort
          handleAdminSort={handleAdminSort}
          resetAdminSort={resetAdminSort}
        />
        <div className="adminBookingsContainer">
          {adminFilterBookings?.map((adminBooking) => {
            return (
              <ShowAdminBookings
                key={adminBooking._id}
                booking={adminBooking}
                removeBooking={removeBooking}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
