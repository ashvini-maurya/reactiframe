import React, { useState } from "react";
import "./App.css";
import IFrame from "./iframe";

const App = () => {
  const [textarea, setTextarea] = useState("");

  return (
    <div className="app">
      <div className="textarea">
        <form>
          <textarea
            name="textarea"
            cols="30"
            rows="3"
            placeholder="textarea"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
          <textarea
            name="textarea2"
            cols="30"
            rows="3"
            placeholder="New textarea"
          />
        </form>
      </div>

      <IFrame>
        <h1>{textarea}</h1>
      </IFrame>
    </div>
  );
};

export default App;
