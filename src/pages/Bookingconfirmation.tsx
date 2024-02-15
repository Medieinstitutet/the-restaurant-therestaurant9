import { IBookinginfo } from "../models/IBokkinginfo";
import { getBookingInfo } from "../services/getBookingInfo";

export const Bookingconfirmation = (booked: IBookinginfo) => {
  return (
    <>
      <section className="booking-confirmation">
        <h1>Trattoria Gustoso</h1>
        <h4>Bokningsbekräftelse</h4>
        <p>Tack för din bokning hos oss på Trattoria Gustoso!</p>
        <p>{booked.id}</p>
        <p>resturangens id</p>
        <p>datum</p>
        <p>time</p>
        <p>hur många personer</p>
        <p>kundens id</p>
        <p>Din bokningsbekräftelse kommer på mailen också!</p>

        <button onClick={() => getBookingInfo()}>test</button>
      </section>
    </>
  );
};
