import React, { useState } from "react";
import "./IncrementDecrement.css";
import IncrementDecrementButton from "../components/IncrementDecrement/IncrementDecrementButton";
import Result from "../components/result/Result";

export default function IncrementDecrement() {
  let [result, setResult] = useState(0);

  return (
    <>
      <div className="main">
        <Result result={result} />
        <a onClick={() => setResult(++result)}>
          <IncrementDecrementButton key={1} type={true} Inner={"Increment"} />
        </a>
        <a onClick={() => setResult(--result)}>
          <IncrementDecrementButton key={2} Inner={"Decrement"} />
        </a>
      </div>
    </>
  );
}
