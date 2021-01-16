import React, { useEffect } from "react";
import { useStore } from "react-redux";
import "./App.css";
import PollCard from "./components/PollCard";
import MainLayout from "./components/layout";
import Login from "./components/login";
import { receiveQuestions } from "./store/actions/questions";
import { getInitialData } from "./utils/api";
function App() {
  const { getState, dispatch } = useStore();
  useEffect(() => {
    getInitialData().then((res) => {
      console.log(res);
      dispatch(receiveQuestions(res.questions));
    });
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
