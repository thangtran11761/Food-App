export const getTables = async () => {
  const apiUrl = `/data/tables.json`;

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(apiUrl, options);
  return res.json();
};

export const getMeals = async () => {
  const apiUrl = `/data/meals.json`;

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(apiUrl, options);
  return res.json();
};
