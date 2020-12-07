import { useState } from "react";
import "./index.css";
const { default: Fields } = require("./Components/Fields");
const { default: Languages } = require("./Components/Languages");
const { default: Translate } = require("./Components/Translate");

function App() {
  const [language, setLanguage] = useState("hi");
  const [text, setText] = useState("");

  return (
    <>
      <Fields label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </>
  );
}

export default App;
