import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addAnswerToQuestion } from "../../store/_actions/questions";
import { addAnswerToUser } from "../../store/actions/users";
interface PollCardProps {
  question: IQuestion;
  mode: "view" | "answer" | "result" | string;
}

export default function PollCard(props: PollCardProps) {
  const { question, mode } = props;
  console.log("ori", mode);
  const users = useSelector((state: any) => state.users);
  const auth = useSelector((state: any) => state.auth);
  const [qMode, setQMode] = useState(mode);
  console.log("q", qMode);
  const dispatch = useDispatch();
  const user: IUser = users[question.author];
  const userAnswer = user.answers[question.id];
  const { Title } = Typography;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    setQMode(mode);
  }, [mode]);

  const answerQuestion = () => {
    dispatch(
      addAnswerToQuestion({ qid: question.id, option: answer, answer: auth.id })
    );
    dispatch(
      addAnswerToUser({ question: question.id, user: auth.id, answer: answer })
    );
    setQMode("result");
  };

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
                View Results
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
                  {userAnswer === "optionOne" && (
                    <span style={{ color: "red" }}> | Your Answer</span>
                  )}
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
                  {userAnswer === "optionTwo" && (
                    <span style={{ color: "red" }}> | Your Answer</span>
                  )}
                </Title>
              </List.Item>
              <List.Item>
                <Progress percent={(optionTwoVotes / totalVotes) * 100} />
              </List.Item>
              <p style={{ textAlign: "center" }}>
                {optionTwoVotes} out of {totalVotes}
              </p>
            </List>
          </>
        );
      case "answer":
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
      case "submit":
        return (
          <>
            <Radio.Group
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem 0",
              }}
              onChange={(e) => setAnswer(e.target.value)}
            >
              <Radio value="optionOne">{question.optionOne.text}</Radio>
              <Divider>OR</Divider>
              <Radio value="optionTwo">{question.optionTwo.text}</Radio>
            </Radio.Group>
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={() => answerQuestion()}
            >
              Submit
            </Button>
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
        <Col>{renderContent(qMode)}</Col>
      </Row>
    </Card>
  );
}
