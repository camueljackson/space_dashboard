import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Spin } from "antd";
import { RocketOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const LayoutDesign = props => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    setActiveKey(location.pathname);
  }, []);

  return !activeKey ? (
    <Spin size="large" />
  ) : (
    <Layout>
      <Header className="header">
        <Link to="/">
          <div className="logo">
            <RocketOutlined />
            Space Dashboard
          </div>
        </Link>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            style={{ height: "100%" }}
            defaultSelectedKeys={[activeKey]}
          >
            <Menu.Item key="/neos">
              <Link to="/neos">Near Earth Objects</Link>
            </Menu.Item>
            <Menu.Item key="/pod">
              <Link to="/pod">Space Picture of the Day</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutDesign;
