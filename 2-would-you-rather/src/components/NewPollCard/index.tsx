import React, { useState } from "react";
import { Button, Card, Divider, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/actions/questions";
import { v4 as uuidv4 } from "uuid";
import { IQuestion, IUser } from "../../store/types";
import { useNavigate } from "react-router-dom";
import { addQuestionToUser } from "../../store/actions/users";
const { Title } = Typography;
export default function NewPollCard() {
  let navigate = useNavigate();
  const auth: IUser = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const createQuestion = () => {
    const newQuestion: IQuestion = {
      id: uuidv4(),
      author: auth.id,
      timestamp: Date.now(),
      optionOne: { text: optionOne, votes: [] },
      optionTwo: { text: optionTwo, votes: [] },
    };
    dispatch(addQuestion(newQuestion));
    dispatch(addQuestionToUser({ question: newQuestion, user: auth.id }));
    navigate("/app/");
  };
  return (
    <Card
      title="Create a New Poll"
      type="inner"
      style={{ width: 500, textAlign: "left" }}
    >
      <Title level={5}>Would you rather ...</Title>
      <Input
        placeholder="Enter Option one."
        onChange={(e) => setOptionOne(e.target.value)}
      />
      <Divider>OR</Divider>
      <Input
        placeholder="Enter Option two."
        onChange={(e) => setOptionTwo(e.target.value)}
      />
      <Button
        type="primary"
        style={{ width: "100%", marginTop: "2rem" }}
        onClick={() => createQuestion()}
      >
        Submit
      </Button>
    </Card>
  );
}
