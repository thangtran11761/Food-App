import React, { useEffect, useState, useContext } from "react";

import classes from "./MealsSummary.module.css";
import { getTables } from "../../services/httpRequest";
import CartContext from "../../store/cart-context";

const MealsSummary = (props) => {
  const cartCtx = useContext(CartContext);

  const [tables, setTables] = useState([]);
  const [choose, setChoose] = useState(cartCtx.tableChoosed);

  useEffect(() => {
    getTables().then((res) => setTables(res));
  }, []);

  const chooseTableHandler = (id) => {
    setChoose(id);
    cartCtx.setTableChoosed(id);
  };

  return (
    <section className={classes.summary}>
      <h2>Choose table</h2>
      <div>
        {tables.map((table) => {
          const colorBorder = table.status === "booked" ? "red" : "green";
          const active = {
            backgroundColor: "#fff",
            color: " #000",
            border: `5px solid ${colorBorder}`,
          };
          const notActive = {
            border: `5px solid ${colorBorder}`,
          };
          return (
            <p
              key={table.id}
              style={table.id === choose ? active : notActive}
              onClick={() => chooseTableHandler(table.id)}
            >
              {table.id}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default MealsSummary;
