import React from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Radio,
  Row,
  List,
  Typography,
  Progress,
} from "antd";
import { IQuestion, IUser } from "../../store/types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
interface PollCardProps {
  question: IQuestion;
  mode: "view" | "answer" | "result" | string;
}
export default function PollCard(props: PollCardProps) {
  const users = useSelector((state: any) => state.users);
  const { question, mode } = props;
  const user: IUser = users[question.author];
  const userAnswer = user.answers[question.id];
  const { Title } = Typography;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const renderContent = (param: string) => {
    switch (param) {
      case "view":
        return (
          <>
            <List
              split={false}
              style={{
                padding: "2rem 0",
              }}
            >
              <List.Item>
                <Title level={5}>{question.optionOne.text}</Title>
              </List.Item>
              <Divider>OR</Divider>
              <List.Item>
                <Title level={5}>{question.optionTwo.text}</Title>
              </List.Item>
            </List>
            <Link to={`/app/questions/${question.id}`}>
              <Button type="primary" style={{ width: "100%" }}>
                Answer Poll
              </Button>
            </Link>
          </>
        );
      case "result":
        return (
          <>
            <List
              split={false}
              style={{
                padding: "2rem 0",
              }}
            >
              <List.Item>
                <Title level={5}>
                  {question.optionOne.text}
                  {userAnswer === "optionOne" && " | Your Answer"}
                </Title>
              </List.Item>
              <List.Item>
                <Progress percent={(optionOneVotes / totalVotes) * 100} />
              </List.Item>
              <p style={{ textAlign: "center" }}>
                {optionOneVotes} out of {totalVotes}
              </p>
              <Divider>OR</Divider>
              <List.Item>
                <Title level={5}>
                  {question.optionTwo.text}
                  {userAnswer === "optionTwo" && " | Your Answer"}
                </Title>
              </List.Item>
              <List.Item>
                <Progress percent={(optionTwoVotes / totalVotes) * 100} />
              </List.Item>
              <p style={{ textAlign: "center" }}>
                {optionTwoVotes} out of {totalVotes}
              </p>
            </List>

            <Link to={`/app/questions/${question.id}`}>
              <Button type="primary" style={{ width: "100%" }}>
                View Results
              </Button>
            </Link>
          </>
        );
      case "answer":
        return (
          <>
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
            <Link to={`/app/questions/${question.id}`}>
              <Button type="primary" style={{ width: "100%" }}>
                Submit
              </Button>
            </Link>
          </>
        );
    }
  };

  return (
    <Card
      title={`${user.name} asks would you rather:`}
      type="inner"
      style={{ width: 600, textAlign: "left" }}
    >
      <Row>
        <Col>
          <img src={user.avatarURL} style={{ width: "8rem" }} alt="avatar" />
          <Divider
            type="vertical"
            style={{ height: "100%", margin: "0 2rem" }}
          />
        </Col>
        <Col>{renderContent(mode)}</Col>
      </Row>
    </Card>
  );
}
