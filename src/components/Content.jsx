import Typewriter from "typewriter-effect";
import { useState } from "react";

export default function Content(props) {
  // console.log("clicked", props.click);
  const valuesObj = props.value;
  console.log(valuesObj);
  const [valueClick, setValueClick] = useState(false);
  let [clicked, setClicked] = useState(props.clicked);
  const [count, setCount] = useState(0);
  // function showContent() {
  //   setClicked(true);
  //   setCount((c) => c + 1);
  // }

  function handleValueClick() {
    setClicked(true);
    setValueClick(true);
  }

  return (
    <div className="contents-container">
      <div className="command-container">
        <div
          className="row1"
          onClick={function () {
            props.handleClick();
            handleValueClick();
          }}
        >
          <div className="pointer">
            <p className="user">~!my-portfolio</p>
          </div>
          <span className="command">
            {!clicked && <h2 className="cursor"></h2>}
            <h2 className={clicked ? "command-text visible" : "command-text"}>
              {props.command}
            </h2>
          </span>
        </div>
        <div className="row2">
          {valuesObj.map((value) => (
            <h2
              className={
                valueClick
                  ? "content-text typewriter visible "
                  : "content-text invisible"
              }
              onClick={() => console.log(value)}
            >
              {value}
            </h2>
          ))}
          {/* <h2
            className={
              valueClick
                ? " typewriter content-text visible "
                : "content-text invisible"
            }
          >
            {props.value}
          </h2> */}
        </div>
      </div>
    </div>
  );
}
