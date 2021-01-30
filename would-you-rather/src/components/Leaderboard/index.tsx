import React from "react";
import ScoreCard from "../ScoreCard";
import { Space } from "antd";
import { useSelector } from "react-redux";
import { IUsers } from "../../store/types";
const LeaderBoard = () => {
  const users: IUsers = useSelector((state: any) => state.users);
  const usersList = Object.entries(users);
  usersList.sort((a, b) => {
    const answereda = Object.keys(a[1].answers).length;
    const askeda = Object.keys(a[1].answers).length;
    const scorea = answereda + askeda;
    const answeredb = Object.keys(b[1].answers).length;
    const askedb = Object.keys(b[1].answers).length;
    const scoreb = answeredb + askedb;
    return scoreb - scorea;
  });
  return (
    <div>
      <Space direction="vertical">
        {usersList.map((u) => (
          <ScoreCard user={u[1]} key={u[0]} />
        ))}
      </Space>
    </div>
  );
};

export default LeaderBoard;
