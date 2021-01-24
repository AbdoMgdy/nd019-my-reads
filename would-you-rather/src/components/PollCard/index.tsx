import React from "react";
import { Button, Card, Col, Divider, Radio, Row, List } from "antd";
import { IQuestion } from "../../store/types";
interface PollCardProps {
  question: IQuestion;
  mode: "view" | "answer" | "result";
}
export default function PollCard(props: PollCardProps) {
  const { question, mode } = props;
  return (
    <Card
      title="Would You Rather:"
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
          {mode === "answer" ? (
            <Radio.Group
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem 0",
              }}
            >
              <Radio value={1}>{question.optionOne.text}</Radio>
              <Divider>OR</Divider>
              <Radio value={2}>{question.optionTwo.text}</Radio>
            </Radio.Group>
          ) : (
            <List
              split={false}
              style={{
                padding: "2rem 0",
              }}
            >
              <List.Item>
                {question.optionOne.text}
                {"  "}
                {mode === "result"
                  ? `  | ${question.optionOne.votes.length} Votes`
                  : ""}
              </List.Item>
              <Divider>OR</Divider>
              <List.Item>
                {question.optionTwo.text}
                {"  "}

                {mode === "result"
                  ? `  | ${question.optionTwo.votes.length} Votes`
                  : ""}
              </List.Item>
            </List>
          )}
          {mode === "answer" ? (
            <Button type="primary" style={{ width: "100%" }}>
              Submit
            </Button>
          ) : (
            <Button type="primary" style={{ width: "100%" }}>
              Answer Poll
            </Button>
          )}
        </Col>
      </Row>
    </Card>
  );
}
