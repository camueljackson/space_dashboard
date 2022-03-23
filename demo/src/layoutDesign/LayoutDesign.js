import { Layout, Menu } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const linkStyle = {
  border: "3px solid red"
};

const LayoutDesign = props => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <RocketOutlined />
          Space Dashboard
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
            <Menu.Item key="1">
              <Link to="/near-earth-objects">Near Earth Objects</Link>
            </Menu.Item>
            <Menu.Item key="2">
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
