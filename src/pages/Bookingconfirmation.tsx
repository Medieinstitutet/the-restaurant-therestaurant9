import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { IBooking } from "../models/IBooking";

export const Bookingconfirmation = () => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const [booked, setBooked] = useState<string | null>(null);
  const [bokningInfo, setBookingInfo] = useState({} as IBooking);

  useEffect(() => {
    const bookedId = searchParams.get("bookingId") || "";
    setBooked(bookedId);

    if (bookedId) {
      axios 
        .get<IBooking[]>(
          `https://school-restaurant-api.azurewebsites.net/booking/${bookedId}`
        )
        .then((response) => {
          setBookingInfo(response.data[0]);
        });
    }
  }, [searchParams]);

  return (
    <section className="booking-confirmation">
      <h1>Trattoria Gustoso</h1>
      <h4>Bokningsbekräftelse</h4>
      <p>Tack för din bokning hos oss på Trattoria Gustoso!</p>
      <p>Bokningsnummer: {booked}</p>
      <p>Antal Personer: {bokningInfo.numberOfGuests}</p>
      <p>Tid: {bokningInfo.time}</p>
      <p>Datum: {bokningInfo.date}</p>
      <p>Din bokningsbekräftelse kommer på mailen också!</p>
    </section>
  );
};
