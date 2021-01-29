import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PollCard from "../PollCard";

const Question = () => {
  const { question_id } = useParams();
  const questions = useSelector((state: any) => state.questions);
  const question = questions[question_id];
  return (
    <div>
      <PollCard mode="answer" question={question} />
    </div>
  );
};

export default Question;
