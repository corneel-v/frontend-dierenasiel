import { Image, Space, Typography } from "antd";
import "@fontsource/inter/700.css";
import dierenasiel_gent from "../../assets/logo/dierenasiel_gent.png";

export default function ProfileName({ name, ...rest }) {
  return (
    <Space style={{ ...rest }}>
      <Image src={dierenasiel_gent} width={32} />
      <Typography.Title
        level={4}
        style={{ color: "white", fontFamily: "Inter" }}
      >
        {name.toUpperCase().replace("_", " ")}
      </Typography.Title>
    </Space>
  );
}
