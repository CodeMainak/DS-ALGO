import "./App.css";
import { Typography, Space, Button, Image, Layout, Col, Row } from "antd";
import Homepage from "./components/Homepage";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const { Header, Footer } = Layout;
  // const history = useHistory();
  return (
    <div className="App">
      <Space
        direction="horizontal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          columnGap: 0,
          marginBottom: 1,
        }}
      >
        <div style={{ padding: 4, background: "black", margin: 0 }}>
          <Typography.Title
            level={5}
            style={{ color: "white", margin: 0, padding: 4, width: 100 }}
          >
            Caution
          </Typography.Title>
        </div>
        <div style={{ padding: 4 }}>
          <Typography.Title
            level={5}
            style={{ color: "black", margin: 0, paddingLeft: 0 }}
          >
            <marquee>
              ** We never charge for blood donations. Don't pay for blood. It's
              a selfless act. Save lives with out cost. Please do not encourage
              if anyone asks for money**{" "}
              <span style={{ color: "#b91816" }}>
                EMERGENCY HELP LINE: 9144147372
              </span>
            </marquee>
          </Typography.Title>
        </div>
      </Space>
      {/* Header section */}
      <Header className="App-header">
        <Row
          gutter={[24, 24]}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            margin: 0,
            padding: 0,
          }}
        >
          <Col>
            <Typography.Title
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: 700,
                display: "flex",
                // paddingLeft: 40,
                cursor: "pointer",
                margin: 0,
                alignItems: "center",
              }}
              level={4}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXcLaBruHsLuyD5keve5PIA-7gpa8yeljGg&usqp=CAU"
                alt="name"
                style={{ height: 40, width: 40 }}
              />
              MSD Blood Bank +
            </Typography.Title>
          </Col>
          <Col style={{ flexGrow: 1 }}>
            <Space
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                // minWidth: 600,
                width: "100%",
              }}
            >
              <Typography.Text
                className="App_header_nav_container_content"
                // onClick={() => history.push("/donor-form")}
              >
                Donate Blood
              </Typography.Text>
              <Link to="donor">
                <Typography.Text className="App_header_nav_container_content">
                  Find Donor
                </Typography.Text>
              </Link>
              <Typography.Text className="App_header_nav_container_content">
                Contact Us
              </Typography.Text>
              <Typography.Text className="App_header_nav_container_content">
                Donation Box
              </Typography.Text>
            </Space>
          </Col>
          <Col>
            <Button className="button" size="large">
              Login/SignUp
            </Button>
          </Col>
        </Row>
      </Header>

      <Outlet />
      {/* Footer Section */}
      <Footer className="footer_container">
        <Row gutter={[16, 16]}>
          <Col
            xs={24}
            sm={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Space
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                Direction: "column",
              }}
            >
              <Image
                src="https://cdn.dribbble.com/users/2620348/screenshots/10495041/media/b110a1631ac9ae054007f19bd98295c0.png?resize=400x300&vertical=center"
                alt="logo"
                height={70}
                width={70}
              />
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: 800 }}
              >
                MSD Blood Bank+
              </Typography.Title>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Space style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: 700 }}
              >
                ABOUT US
              </Typography.Title>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                About Us
              </Typography.Text>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                How it works
              </Typography.Text>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                Team
              </Typography.Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Space style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: 700 }}
              >
                PRESS
              </Typography.Title>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                Latest News
              </Typography.Text>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                Events
              </Typography.Text>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                Awards
              </Typography.Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Space style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Title
                level={3}
                style={{ color: "white", fontWeight: 700 }}
              >
                GET IN TOUCH
              </Typography.Title>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                Blogs
              </Typography.Text>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                Causes
              </Typography.Text>
              <Typography.Text
                style={{ color: "white", fontWeight: 700, cursor: "pointer" }}
              >
                Make a blood donor
              </Typography.Text>
            </Space>
          </Col>
        </Row>
      </Footer>
    </div>
  );
};

export default App;
