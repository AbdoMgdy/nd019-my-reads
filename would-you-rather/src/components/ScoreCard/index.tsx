import React from "react";
import { Card, Col, Divider, Row, List, Statistic } from "antd";
import { IUser } from "../../store/types";
interface ScoreCardProps {
  user: IUser;
}
export default function ScoreCard() {
  //   const { user } = props;
  return (
    <Card
      title={`Ahemd's Score`}
      type="inner"
      style={{ width: 500, textAlign: "left" }}
    >
      <Row>
        <Col>
          <img
            src="./images/avatars/cat.png"
            style={{ width: "8rem" }}
            alt="avatar"
          />
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
            <List.Item>Answered Questions: 5</List.Item>
            <Divider />
            <List.Item>Created Questions: 5</List.Item>
          </List>
        </Col>
        <Col
          style={{ display: "flex", flexDirection: "row", padding: "2rem 0" }}
        >
          <Divider
            type="vertical"
            style={{ height: "100%", margin: "0 2rem" }}
          />
          <Statistic title="Score" value={150} />
        </Col>
      </Row>
    </Card>
  );
}
