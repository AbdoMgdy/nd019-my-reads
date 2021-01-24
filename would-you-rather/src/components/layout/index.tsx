import React from "react";
import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
interface MainLayoutProps {
  children: any;
}

const { Sider, Header, Content } = Layout;
const { Title } = Typography;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout style={{ height: "100%" }}>
      <Sider style={{ padding: "3.75rem 0" }}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key={1}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link to="/new">New Poll</Link>
          </Menu.Item>
          <Menu.Item key={3}>
            <Link to="/leaderboard">Leaderboard</Link>
          </Menu.Item>
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
