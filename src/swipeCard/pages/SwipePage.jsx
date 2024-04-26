import { Layout } from "antd";
import ProfileName from "../components/ProfileName";
import ProfileImages from "../components/ProfileImages";
import NameCard from "../components/NameCard";

const { Header, Content } = Layout;

export default function SwipePage() {
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <Header
          style={{
            backgroundColor: "#CABE8B",
            borderRadius: 25,
            height: 124,
            transform: "translateY(-50px)",
            display: "flex",
            marginBottom: "-23px",
          }}
        >
          <ProfileName
            name="dierenasiel_gent"
            transform={"translateY(34px)"}
            margin={"auto"}
          />
        </Header>
        <Content>
          <ProfileImages animalName={"yvette"} amountOfImages={4} />
          <NameCard name={"yvette"} age={10} />
        </Content>
      </Layout>
    </>
  );
}
