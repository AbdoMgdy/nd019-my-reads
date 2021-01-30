import React, { useState, useEffect } from "react";
import { Button, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/auth";
interface MainLayoutProps {
  children: any;
}
const { Sider, Header, Content } = Layout;
const { Title } = Typography;

export default function MainLayout({ children }: MainLayoutProps) {
  const [user, setUser] = useState({ name: "", avatarURL: "" });
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.auth);
  useEffect(() => {
    setUser(state);
  }, [state]);
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sider style={{ padding: "3.75rem 0" }}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key={1}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link to="/app/add">New Poll</Link>
          </Menu.Item>
          <Menu.Item key={3}>
            <Link to="/app/leaderboard">Leaderboard</Link>
          </Menu.Item>
          {user.name ? (
            <>
              <Menu.Item key={4}>
                <img
                  src={user.avatarURL}
                  style={{ width: "25px", marginRight: "8px" }}
                  alt=""
                />
                {user.name}
              </Menu.Item>
              <Menu.Item key={5}>
                <Button type="primary" onClick={() => logoutUser()}>
                  Logout
                </Button>
              </Menu.Item>
            </>
          ) : null}
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Title style={{ color: "#fff", padding: "0.5rem" }}>
            Would You Rather ?
          </Title>
        </Header>
        <Content
          style={{
            padding: "3rem",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
