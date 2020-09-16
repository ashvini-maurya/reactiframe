import React, { useState } from "react";
import "./App.css";
import IFrame from "./iframe";
import * as nunjucks from "nunjucks";

const App = () => {
  const [htmlTemplate, setHtmlTemplate] = useState("");
  const [jsonContext, setJsonContext] = useState("");
  const [templateString, setTemplateString] = useState("");

  function renderTemplate() {
    const jsonifiedContext = JSON.parse(jsonContext);
    setTemplateString(nunjucks.renderString(htmlTemplate, jsonifiedContext));
  }

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          name="textarea"
          cols="30"
          rows="3"
          placeholder="HTML template"
          value={htmlTemplate}
          onChange={(e) => setHtmlTemplate(e.target.value)}
        />
        <textarea
          name="textarea2"
          cols="30"
          rows="3"
          placeholder="JSON Context"
          value={jsonContext}
          onChange={(e) => setJsonContext(e.target.value)}
        />
        <button onClick={renderTemplate} className="render">Render</button>
      </div>

      <IFrame>{templateString}</IFrame>
    </div>
  );
};

export default App;
