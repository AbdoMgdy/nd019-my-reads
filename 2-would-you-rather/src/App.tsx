import React, { useEffect } from "react";
import { useSelector, useStore } from "react-redux";
import "./App.css";
import MainLayout from "./components/layout";
import { receiveQuestions } from "./store/actions/questions";
import { getInitialData } from "./utils/api";
import { useRoutes } from "react-router-dom";
import { receiveUsers } from "./store/actions/users";
import routes from "./routes";
function App() {
  const auth = useSelector((state: any) => state.auth);
  const { getState, dispatch } = useStore();
  useEffect(() => {
    getInitialData().then((res) => {
      dispatch(receiveQuestions(res.questions));
      dispatch(receiveUsers(res.users));
    });
  }, [dispatch, getState]);
  const routing = useRoutes(routes(auth));
  return (
    <div className="App">
      <MainLayout>{routing}</MainLayout>
    </div>
  );
}

export default App;
