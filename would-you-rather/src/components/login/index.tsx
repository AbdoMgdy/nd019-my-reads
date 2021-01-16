import { Typography, Select, Button, Card } from "antd";
import React from "react";
import { useStore } from "react-redux";
import { login } from "../../store/actions/auth";

const { Option } = Select;
const { Title } = Typography;
const Login = () => {
  const { getState, dispatch } = useStore();
  const state = getState();
  console.log(state);
  const loginUser = (user: string) => {
    dispatch(login(user));
    console.log(state);
  };
  return (
    <div style={{ padding: "10rem" }}>
      <Card
        title="Welcome to Would you Rather ?"
        type="inner"
        style={{ margin: "0 auto", width: 500, textAlign: "center" }}
      >
        <img src="./images/animals.png" width="250" alt="none" />
        <Title level={3} style={{ marginTop: "1rem", color: "#1890ff" }}>
          Sign In
        </Title>

        <Select style={{ width: "100%" }} onChange={() => loginUser("Abdo")}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Button type="primary" style={{ marginTop: "1rem", width: "100%" }}>
          Login
        </Button>
      </Card>
    </div>
  );
};

export default Login;
