import React from "react";
import "./IncrementDecrementButton.css";

export default function IncrementDecrementButton({ Inner, type }) {
  return (
    <>
      <button
        className={`btn-style ${type ? "btn-increment" : "btn-decrement"}`}
      >
        {Inner}
      </button>
    </>
  );
}
