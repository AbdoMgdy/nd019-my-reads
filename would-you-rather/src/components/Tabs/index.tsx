import React, { useEffect } from "react";

import { Tabs, Space } from "antd";
import PollCard from "../PollCard";
import { useDispatch, useSelector } from "react-redux";
import { IQuesions, IUser } from "../../store/types";
import { login } from "../../store/actions/auth";

const { TabPane } = Tabs;

function PollTabs() {
  const questions: IQuesions = useSelector((state: any) => state.questions);
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  const auth: IUser = useSelector((state: any) => state.auth);
  useEffect(() => {
    dispatch(login(users[auth.id]));
  }, [users, auth.id, dispatch]);
  const filteredQuestions = () => {
    let answeredQuestions = [];
    let unAnsweredQuestions = [];
    for (let q in questions) {
      if (q in auth.answers) {
        answeredQuestions.push(questions[q]);
      } else {
        unAnsweredQuestions.push(questions[q]);
      }
    }
    return {
      answeredQuestions,
      unAnsweredQuestions,
    };
  };
  const qList = filteredQuestions();
  return (
    <Tabs defaultActiveKey="1" type="card" size="large">
      <TabPane tab="Unanswered" key="1">
        <Space direction="vertical">
          {qList.unAnsweredQuestions.map((q) => (
            <PollCard key={q.id} question={q} mode="answer" />
          ))}
        </Space>
      </TabPane>
      <TabPane tab="Answered" key="2">
        <Space direction="vertical">
          {qList.answeredQuestions.map((q) => (
            <PollCard key={q.id} question={q} mode="view" />
          ))}
        </Space>
      </TabPane>
    </Tabs>
  );
}

export default PollTabs;
