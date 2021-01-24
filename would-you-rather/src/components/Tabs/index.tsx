import React from "react";

import { Tabs } from "antd";
import PollCard from "../PollCard";
import NewPollCard from "../NewPollCard";

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
  return (
    <Tabs defaultActiveKey="1" type="card" size="large">
      <TabPane tab="Answered" key="1">
        <PollCard question={test} mode="view" />
      </TabPane>
      <TabPane tab="Unanswered" key="2">
        <PollCard question={test} mode="result" />
      </TabPane>
    </Tabs>
  );
}

export default PollTabs;
