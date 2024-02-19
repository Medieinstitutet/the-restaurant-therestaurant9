import { IAdminBookingInfo } from "../models/IAdminBookingInfo";

export const getBookingsLS = (): IAdminBookingInfo[] => {
  let lsBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  return lsBookings;
};
