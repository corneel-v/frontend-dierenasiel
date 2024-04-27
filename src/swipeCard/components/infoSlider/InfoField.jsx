import { Typography } from "antd";

export default function InfoField({ text }) {
  return (
    <div style={{ width: "50%" }}>
      <Typography.Paragraph
        style={{
          fontFamile: "Inter",
          fontSize: 16,
          color: "white",
          textAlign: "center",
          marginBottom: 0,
          alignSelf: "center",
        }}
      >
        {text}
      </Typography.Paragraph>
    </div>
  );
}
