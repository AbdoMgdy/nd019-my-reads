import React, { useEffect } from "react";
import { useStore } from "react-redux";
import "./App.css";
import PollCard from "./components/card";
import MainLayout from "./components/layout";
import Login from "./components/login";
import { handleInitialData } from "./store/actions/shared";
function App() {
  const { getState, dispatch } = useStore();
  useEffect(() => {
    handleInitialData(dispatch);
    console.log(getState());
  }, [dispatch, getState]);
  return (
    <div className="App">
      <MainLayout>
        <PollCard />
      </MainLayout>
      <Login />
    </div>
  );
}

export default App;
