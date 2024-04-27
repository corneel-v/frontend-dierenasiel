import { useState, useEffect } from "react";
import { Layout } from "antd";
import ProfileName from "../components/ProfileName";
import ProfileImages from "../components/ProfileImages";
import NameCard from "../components/NameCard";
import { getAll, getDierById } from "../../api/dier";
import axios from "axios";
import useSWR from "swr";

const { Header, Content } = Layout;

export default function SwipePage() {
  const [animalId, setAnimalId] = useState(1);

  const { data: animalData, error } = useSWR("dieren", () =>
    getDierById(animalId)
  );

  const handleNextAnimal = () => {
    setAnimalId(animalId + 1);
  };

  if (!animalData) {
    return <div>Loading...</div>;
  }

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
            name={"Dierenasiel Gent"}
            transform={"translateY(34px)"}
            margin={"auto"}
          />
        </Header>
        <Content>
          <ProfileImages animalName={animalData.naam} amountOfImages={4} />
          <NameCard name={animalData.naam} age={animalData.geboortedatum} />
          <button onClick={handleNextAnimal} style={{ color: "red" }}>
            Next Animal
          </button>
        </Content>
      </Layout>
    </>
  );
}
