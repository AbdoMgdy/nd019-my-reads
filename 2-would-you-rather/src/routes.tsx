import { Navigate } from "react-router-dom";
import LeaderBoard from "./components/Leaderboard";
import Login from "./components/login";
import NewPollCard from "./components/NewPollCard";
import Question from "./components/Question";
import PollTabs from "./components/Tabs";
const routes = (isLoggedIn: boolean) => [
  {
    path: "/app",
    // element: isLoggedIn ? <PollTabs /> : <Navigate to="/login" />,
    children: [
      {
        path: "/",
        element: isLoggedIn ? <PollTabs /> : <Navigate to="/login" />,
      },
      {
        path: "/add",
        element: isLoggedIn ? <NewPollCard /> : <Navigate to="/login" />,
      },
      {
        path: "/leaderboard",
        element: isLoggedIn ? <LeaderBoard /> : <Navigate to="/login" />,
      },
      {
        path: "questions/:question_id",
        element: isLoggedIn ? <Question /> : <Navigate to="/login" />,
      },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <Login /> : <Navigate to="/app" />,
    children: [
      { path: "login", element: <Login /> },
      { path: "/", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
