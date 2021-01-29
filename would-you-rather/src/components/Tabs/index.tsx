import React from "react";

import { Tabs, Space } from "antd";
import PollCard from "../PollCard";
import { useSelector } from "react-redux";
import { IQuesions, IUser } from "../../store/types";

const { TabPane } = Tabs;

const test = {
  id: "xj352vofupe1dqz9emx13r",
  author: "joeylene",
  timestamp: 1493579767190,
  optionOne: {
    votes: ["joeylene"],
    text: "write JavaScript",
  },
  optionTwo: {
    votes: ["ifenna"],
    text: "write Swift",
  },
};
function PollTabs() {
  const questions: IQuesions = useSelector((state: any) => state.questions);
  const auth: IUser = useSelector((state: any) => state.auth);
  console.log(auth);
  console.log(questions);
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
            <PollCard key={q.id} question={q} mode="view" />
          ))}
        </Space>
      </TabPane>
      <TabPane tab="Answered" key="2">
        <Space direction="vertical">
          {qList.answeredQuestions.map((q) => (
            <PollCard key={q.id} question={q} mode="result" />
          ))}
        </Space>
      </TabPane>
    </Tabs>
  );
}

export default PollTabs;
