import React from "react";
import { Card, Radio } from "antd";
interface PollCardProps {}
export default function PollCard() {
  return (
    <Card
      title="Would You Rather:"
      type="inner"
      style={{ width: 500, textAlign: "left" }}
    >
      <Radio.Group style={{ display: "flex", flexDirection: "column" }}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
      </Radio.Group>
    </Card>
  );
}
