import "../index.css";
import React from "react";
import { useEffect } from "react";
import Content from "./Content";
import { useState } from "react";

const data = [
  {
    id: 1,
    command: "whoami",
    value: [
      "Product Designer | Front-end Developer | Wix Developer | Data Analyst",
    ],
    clicked: false,
  },
  {
    id: 2,
    command: "ls",
    value: ["Projects", "About Me", "Contact Me"],
    clicked: false,
  },
  {
    id: 3,
    command: "cd Projects",
    value: ["Under Development. Please Stay Tuned"],
    clicked: false,
  },
];

export default function Terminal() {
  let [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);
  function showContent() {
    setClicked(true);
    setCount((c) => c + 1);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      const terminalContainer = document.querySelector(".terminal-container");
      if (terminalContainer) {
        terminalContainer.classList.add("move-up");
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="terminal-container">
      <div className="circles-container">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <React.Fragment>
        {data.slice(0, count).map((content) => (
          <Content
            command={content.command}
            value={content.value}
            key={content.id}
            // click={content.clicked}
            handleClick={() => showContent()}
          />
        ))}
        {/* <Content
          command="whoami"
          value="Product Designer | Front-end Developer | Wix Developer | Data Analyst"
          click={clicked}
          handleClick={() => showContent()}
        />
        {count >= 1 && (
          <Content
            command="ls"
            value="Projects | About Me | Contact Me"
            click={(clicked = false)}
            handleClick={() => showContent()}
          />
        )}*/}
      </React.Fragment>
    </div>
  );
}
