import { Typography } from "antd";

export default function ProfileInfo({ content }) {
  return (
    <div
      style={{
        width: 300,
        height: 130,
        borderRadius: 25,
        backgroundColor: "#CABE8B",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
        transform: "translateY(-40px)",
      }}
    >
      <Typography.Paragraph
        type={2}
        style={{
          fontFamily: "Inter",
          color: "white",
          textAlign: "center",
          fontSize: 14,
          marginBottom: 0,
        }}
      >
        {content} <u>Lees meer</u>
      </Typography.Paragraph>
    </div>
  );
}
