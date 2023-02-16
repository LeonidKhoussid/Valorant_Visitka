import React from "react";
import Landing from "./components/Landing";
import GlobalTheme from "./theme/GlobalTheme";

function App() {
  return (
    <>
      {GlobalTheme}
      <Landing />
    </>
  );
}

export default App;
