import React from "react";
import { Card, Col, Divider, Row, List, Statistic } from "antd";
import { IUser } from "../../store/types";
interface ScoreCardProps {
  user: IUser;
}
export default function ScoreCard(props: ScoreCardProps) {
  const { user } = props;
  const answered = Object.keys(user.answers).length;
  const asked = Object.keys(user.answers).length;
  const score = answered + asked;
  return (
    <Card
      title={`${user.name}'s Score`}
      type="inner"
      style={{ width: 500, textAlign: "left" }}
    >
      <Row>
        <Col>
          <img src={user.avatarURL} style={{ width: "8rem" }} alt="avatar" />
          <Divider
            type="vertical"
            style={{ height: "100%", margin: "0 2rem" }}
          />
        </Col>
        <Col>
          <List
            split={false}
            style={{
              padding: "2rem 0",
            }}
          >
            <List.Item>Answered Questions: {answered}</List.Item>
            <Divider />
            <List.Item>Created Questions: {asked}</List.Item>
          </List>
        </Col>
        <Col
          style={{ display: "flex", flexDirection: "row", padding: "2rem 0" }}
        >
          <Divider
            type="vertical"
            style={{ height: "100%", margin: "0 2rem" }}
          />
          <Statistic title="Score" value={score} />
        </Col>
      </Row>
    </Card>
  );
}
