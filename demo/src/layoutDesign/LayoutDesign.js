import { Layout, Menu } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const { Header, Content, Sider } = Layout;

const LayoutDesign = props => {
  const route = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  const [activeKey, setActiveKey] = useState("neos");

  useEffect(() => {
    setActiveKey(route);
    console.log("route", route);
  }, [route]);

  return (
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
          <Menu mode="inline" style={{ height: "100%" }}>
            <Menu.Item key="neos">
              <Link to="/neos">Near Earth Objects</Link>
            </Menu.Item>
            <Menu.Item key="pod">
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
