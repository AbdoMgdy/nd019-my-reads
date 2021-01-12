import React from "react";
import "./App.css";
import PollCard from "./components/card";
import MainLayout from "./components/layout";
function App() {
  return (
    <div className="App">
      <MainLayout>
        <PollCard />
      </MainLayout>
    </div>
  );
}

export default App;
