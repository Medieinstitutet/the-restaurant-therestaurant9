interface ICustomer {
  userName: string;
  userLastName: string;
  userEmail: string;
  userPhone: string;
}
export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICustomer;
}
