import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IUser } from "../../store/types";
import PollCard from "../PollCard";

const Question = () => {
  const auth: IUser = useSelector((state: any) => state.auth);
  const { question_id } = useParams();
  const questions = useSelector((state: any) => state.questions);
  const question = questions[question_id];
  const [mode, setMode] = useState("submit");
  useEffect(() => {
    if (question_id in auth.answers) setMode("result");
    else setMode("submit");
  }, [auth.answers, question_id]);
  return (
    <div>
      <PollCard mode={mode} question={question} />
    </div>
  );
};

export default Question;
