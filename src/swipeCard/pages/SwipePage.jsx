import { useState, useEffect } from "react";
import { Layout } from "antd";
import ProfileName from "../components/ProfileName";
import ProfileImages from "../components/ProfileImages";
import NameCard from "../components/NameCard";
import { getAll, getDierById } from "../../api/dier";
import axios from "axios";
import useSWR from "swr";
import ButtonGroup from "../components/ButtonGroup";
import ProfileInfo from "../components/ProfileInfo";
import { UpCircleTwoTone } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

export default function SwipePage() {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return;
    }
    const d = touchEnd - touchStart;
    const isSwipeUp = d < -minSwipDistance;
    const isSwipeDown = d > minSwipDistance;
    if (isSwipeUp || isSwipeDown) {
      console.log(`Swiped ${isSwipeUp ? "up" : "down"}`);
    }
  };

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
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
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
          {/* <ProfileImages animalName={"yvette"} amountOfImages={4} />
          <NameCard name={"yvette"} age={10} />
          <ButtonGroup paw="cat" />
          <ProfileInfo
            content={
              "Yvette werd als zwerfkatje binnengebracht. Ze dachten dat ze zwanger  was, maar helaas bleek ze een zware baarmoederontsteking te hebben. Ze  is heel schuw rond mensen."
            }
          /> */}
        </Content>
        <Footer
          style={{
            backgroundColor: "white",
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UpCircleTwoTone
            twoToneColor={"#CABE8B"}
            style={{ marginTop: 2, fontSize: 16 }}
          />
        </Footer>
      </Layout>
    </div>
  );
}
