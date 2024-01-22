import React from "react";
import {
  Typography,
  Space,
  Button,
  Input,
  Image,
  Layout,
  Col,
  Row,
} from "antd";

import BannerImage from "./../assets/banner_image.png";

const Homepage = () => {
  const { Content } = Layout;
  const { Search } = Input;
  return (
    <Content>
      <Row
        gutter={[24, 24]}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "24px 64px",
        }}
      >
        <Col span={24}>
          <Search
            placeholder="Search donor nearby..."
            allowClear
            enterButton={
              <Button
                type="primary"
                style={{
                  background: "#b91816",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Search
              </Button>
            }
            size="large"
            style={{
              border: "2px solid red",
            }}
            // Add any additional props or events here (e.g., onSearch)
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ margin: "32px 64px 0" }}>
        <Col span={24}>
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              borderRadius: "8px", // Add rounded corners if desired
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover", // Ensure the image covers the entire container
              }}
              src={BannerImage}
              alt="banner_image"
              preview={false}
            />
            {/* You can add an overlay or other elements on top of the image here if needed */}
          </div>
        </Col>
      </Row>

      <Space>
        <Button
          size="large"
          type="primary"
          className="button"
          style={{
            position: "relative",
            bottom: "10vh",
            right: "18vw",
          }}
        >
          FIND BLOOD
        </Button>
      </Space>
      {/* <Space
        style={{
          height: 300,
          width: "90vw",
          background: "Red",
          borderRadius: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography.Title level={1}>We are here to help you</Typography.Title>
        <Typography.Title level={3}>We are here to help you</Typography.Title>
        <Typography.Title level={5}>We are here to help you</Typography.Title>
      </Space> */}

      <Row
        gutter={[24, 24]}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 64px 16px 64px",
        }}
      >
        <Col>
          <Typography.Title level={1}>Our Offerings</Typography.Title>
        </Col>
      </Row>
      <Row
        gutter={[24, 24]}
        style={{
          margin: "0 64px",
        }}
      >
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
          <Space className="offerings_container">
            <Typography.Title level={3} style={{ color: "white" }}>
              Find Donor
            </Typography.Title>
          </Space>
        </Col>
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
          <Space className="offerings_container">
            <Typography.Title level={3} style={{ color: "white" }}>
              Donate Blood
            </Typography.Title>
          </Space>
        </Col>
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
          <Space className="offerings_container">
            <Typography.Title level={3} style={{ color: "white" }}>
              Donation Box
            </Typography.Title>
          </Space>
        </Col>
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
          <Space className="offerings_container">
            <Typography.Title level={3} style={{ color: "white" }}>
              Events
            </Typography.Title>
          </Space>
        </Col>
      </Row>
    </Content>
  );
};

export default Homepage;
