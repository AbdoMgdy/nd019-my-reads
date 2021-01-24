import React from "react";
import { Button, Card, Divider, Input, Typography } from "antd";

const { Title } = Typography;
export default function NewPollCard() {
  return (
    <Card
      title="Create a New Poll"
      type="inner"
      style={{ width: 500, textAlign: "left" }}
    >
      <Title level={5}>Would you rather ...</Title>
      <Input placeholder="Enter Option one." />
      <Divider>OR</Divider>
      <Input placeholder="Enter Option two." />
      <Button type="primary" style={{ width: "100%", marginTop: "2rem" }}>
        Submit
      </Button>
    </Card>
  );
}
