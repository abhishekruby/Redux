import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Shop() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h1>Withdraw and deposit</h1>
      <button
        className="btn btn-outline-warning"
        onClick={() => {
          withdrawMoney(100);
        }}
       
        type="submit"
      >
        -
      </button>{" "}
      updating the balance{" "}
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          depositMoney(100);
        }}
        type="submit"
      >
        +
      </button>
    </div>
  );
}

export default Shop;
