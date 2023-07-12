import "./styles.css";
import { useState } from "react";

export default function App() {
  let [data, setData] = useState("");
  let [ans, setAns] = useState(" ");

  return (
    <div className="App">
      <div className="Header">
        <h1>Basic calculator</h1>
      </div>
      <div>
        <form>
          <div className="Text1">
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="Data"
            />
          </div>
          <div className="Text1">
            <input type="text" value={ans} />
          </div>
          <div>
            <button type="submit" onClick={() => setAns(eval(data))}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
