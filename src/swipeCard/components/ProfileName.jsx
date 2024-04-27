import { Image, Space, Typography } from "antd";
import "@fontsource/inter/700.css";

export default function ProfileName({ name, ...rest }) {
  return (
    <Space style={{ ...rest }}>
      <Image src={`/src/assets/logo/${name}.png`} width={32} />
      <Typography.Title
        level={4}
        style={{ color: "white", fontFamily: "Inter" }}
      >
        {name.toUpperCase().replace("_", " ")}
      </Typography.Title>
    </Space>
  );
}
