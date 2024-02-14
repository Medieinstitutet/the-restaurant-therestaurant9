import axios from "axios";

export const getRestaurant = async () => {
  const response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/restaurant/create",
    {
      name: "Trattoria Gustoso",
      address: {
        street: "Drottninggatan 1",
        zip: "123 45",
        city: "Stockholm",
      },
    }
  );
  console.log(response.data);
};
