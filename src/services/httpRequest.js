export const getUsers = async () => {
  const apiUrl = `/data/users.json`;

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
