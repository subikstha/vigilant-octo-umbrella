import { useState, useEffect, useDebugValue } from "react";

const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaOfTheDay ? `${pizzaOfTheDay.id}: ${pizzaOfTheDay.name}` : "loading...",
  );
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
