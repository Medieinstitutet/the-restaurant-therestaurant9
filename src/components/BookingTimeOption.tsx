import { IBooking } from "../models/IBooking";
import { TimeSlot } from "../models/TimeSlot";

interface IBookingTimeOption {
  booking: IBooking;
  handleTimeClick: (TimeSlot: string) => void;
  isFull: {
    table18Full: boolean;
    table21Full: boolean;
  };
}

export const BookingTimeOption = ({
  handleTimeClick,
  isFull,
}: IBookingTimeOption) => {
  let timeSlot18 = new TimeSlot("18:00", isFull.table18Full);
  let timeSlot21 = new TimeSlot("21:00", isFull.table21Full);
  console.log(isFull.table18Full);

  return (
    <>
      <div className="bookingFormTimeContainer">
        <p>Sittning</p>
        <ul>
          <li
            onClick={() => handleTimeClick(timeSlot18.time)}
            className="bookingTime"
          >
            {timeSlot18.isFull ? "18:00 is full" : "18:00"}
          </li>
          <li
            onClick={() => handleTimeClick(timeSlot21.time)}
            className="bookingTime"
          >
            {timeSlot21.isFull ? "21:00 is full" : "21:00"}
          </li>
        </ul>
      </div>
    </>
  );
};
