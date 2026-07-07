import { useState, useEffect } from "react";

const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  const fetchPizzaOfTheDay = async () => {
    const pizzaResponse = await fetch("/api/pizza-of-the-day");
    const pizzaData = await pizzaResponse.json();
    setPizzaOfTheDay(pizzaData);
  };

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};

export default usePizzaOfTheDay;
