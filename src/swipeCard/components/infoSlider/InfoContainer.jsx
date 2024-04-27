import { Divider, Layout, Typography } from "antd";
import { UpCircleTwoTone } from "@ant-design/icons";
import "@fontsource/inter";
import InfoField from "./InfoField";

const { Header, Content } = Layout;

export default function InfoContainer({ animal }) {
  const setText = (text) => {
    console.log(typeof text);
    if (typeof text === "boolean") {
      return text ? "Ja" : "Nee";
    }
    return text;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "916px",
        borderRadius: 25,
        backgroundColor: "#CABE8B",
        position: "absolute",
        transform: "translateY(40px)",
        zIndex: 10,
      }}
    >
      <Layout>
        <Header
          style={{
            backgroundColor: "#CABE8B",
            width: "100vw",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UpCircleTwoTone
            twoToneColor={"lightgrey"}
            style={{ marginTop: 2, fontSize: 16, margin: "auto" }}
          />
        </Header>
        <Content style={{ backgroundColor: "#CABE88" }}>
          <div
            style={{
              width: "90vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Typography.Paragraph
              style={{
                fontFamily: "Inter",
                fontSize: 14,
                color: "white",
                textAlign: "center",
                marginBottom: 0,
              }}
            >
              {info}
            </Typography.Paragraph>
            <Divider style={{ backgroundColor: "white", margin: 8 }} />
          </div>
          <div>
            {Object.keys(rest).map((key) => {
              return (
                <div
                  key={key + 99}
                  style={{
                    width: "90vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                >
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignContent: "center",
                    }}
                  >
                    <InfoField text={key} />
                    <InfoField text={setText(rest[key])} />
                  </div>
                  <Divider style={{ backgroundColor: "white", margin: 8 }} />
                </div>
              );
            })}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
