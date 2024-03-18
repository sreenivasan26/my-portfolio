import Terminal from "./components/Terminal";
import "./index.css";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <h2
        style={{
          color: "var(--dark-green)",
          fontWeight: "normal",
          marginBottom: "10px",
          fontSize: "48px",
        }}
      >
        HELLO THERE!
      </h2>
      <h1 className="name">
        <Typewriter
          options={{
            strings: "I'M SREENIVASAN R R",
            autoStart: true,
            loop: false,
            cursor: "",
          }}
        />
      </h1>
      <Terminal />
    </div>
  );
}

export default App;
