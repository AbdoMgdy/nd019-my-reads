import React, { useEffect } from "react";
import { useStore } from "react-redux";
import "./App.css";
import MainLayout from "./components/layout";
import Login from "./components/login";
import { receiveQuestions } from "./store/actions/questions";
import { getInitialData } from "./utils/api";
import PollTabs from "./components/Tabs";
import ScoreBoardCard from "./components/ScoreCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewPollCard from "./components/NewPollCard";
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
      <Router>
        <MainLayout>
          <Route exact path="/" component={PollTabs} />
          <Route path="/login" component={Login} />
          <Route exact path="/new" component={NewPollCard} />
          <Route exact path="/leaderboard" component={ScoreBoardCard} />
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
