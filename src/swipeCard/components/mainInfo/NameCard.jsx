import { Typography } from "antd";
import "@fontsource/inter";

export default function NameCard({ name, birthDate }) {
  const calculateAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(birthDate);
  return (
    <div
      style={{
        width: 250,
        height: 107,
        transform: "translateX(-55px) translateY(-85px)",
        borderRadius: 25,
        backgroundColor: "#CABE8B",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <div
        style={{
          width: 224,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          level={1}
          style={{
            color: "white",
            fontFamily: "Inter",
            fontWeight: 200,
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          {name[0].toUpperCase() + name.slice(1)}
        </Typography.Title>
        <Typography.Paragraph
          style={{
            color: "white",
            fontFamily: "Inter",
            fontWeight: 100,
            marginBottom: 0,
          }}
        >
          {age} jaar
        </Typography.Paragraph>
      </div>
    </div>
  );
}
