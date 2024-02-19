import { IAdminBookingInfo } from "../models/IAdminBookingInfo";

export const setBookingsLS = (bookings: IAdminBookingInfo[]) => {
  localStorage.setItem("bookings", JSON.stringify(bookings) || "[]");
};
