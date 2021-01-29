import React from "react";
import ScoreCard from "../ScoreCard";
import { Space } from "antd";
import { useSelector } from "react-redux";
import { IUsers } from "../../store/types";
const LeaderBoard = () => {
  const users: IUsers = useSelector((state: any) => state.users);
  const usersList = Object.entries(users);
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
