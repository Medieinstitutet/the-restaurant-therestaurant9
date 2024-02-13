export class Booking {
  constructor(
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number
  ) {}
}
