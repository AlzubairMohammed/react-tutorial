import React from "react";
import "./IncrementDecrement.css";
import IncrementDecrementButton from "../components/IncrementDecrement/IncrementDecrementButton";

export default function IncrementDecrement() {
  return (
    <>
      <IncrementDecrementButton key={1} Inner={"Increment"} />
      <IncrementDecrementButton key={1} Inner={"Decrement"} />
    </>
  );
}
