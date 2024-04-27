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
  const { data, isLoading, error } = useSWR("dieren", getAll);

  const [currentAnimalId, setCurrentAnimalId] = useState(0);
  const [nextAnimalId, setNextAnimalId] = useState(1);

  const [currentAnimal, setCurrentAnimal] = useState(null);

  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const minSwipDistance = 50;

  const onTouchStart = (e) => {
    setTouchEndY(0);
    setTouchStartY(e.targetTouches[0].clientY);
    setTouchEndX(0);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndY(e.targetTouches[0].clientY);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartY || !touchEndY) {
      return;
    }
    const d = touchEndY - touchStartY;
    const isSwipeUp = d < -minSwipDistance;
    const isSwipeDown = d > minSwipDistance;
    if (isSwipeUp || isSwipeDown) {
      console.log(`Swiped ${isSwipeUp ? "up" : "down"}`);
    }
    if (!touchStartX || !touchEndX) {
      return;
    }
    const dx = touchEndX - touchStartX;
    const isSwipeRight = dx > minSwipDistance;
    const isSwipeLeft = dx < -minSwipDistance;
    if (isSwipeRight || isSwipeLeft) {
      console.log(`Swiped ${isSwipeRight ? "right" : "left"}`);
      handleNextAnimal();
    }
  };

  const handleNextAnimal = () => {
    setCurrentAnimalId(nextAnimalId);
    setNextAnimalId(nextAnimalId + 1);
    if (nextAnimalId === data.length - 1) {
      setNextAnimalId(0);
    }
    console.log(
      `Current animal: ${data[currentAnimalId]} - Id: ${currentAnimalId} \n Next animal: ${data[nextAnimalId]} - Id: ${nextAnimalId}`
    );
    setCurrentAnimal(data[currentAnimalId]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
            name={"dierenasiel_gent"}
            transform={"translateY(34px)"}
            margin={"auto"}
          />
        </Header>
        <Content>
          {/* <ProfileImages animalName={animalData.naam} amountOfImages={4} />
          <NameCard name={animalData.naam} age={animalData.geboortedatum} />
          <button onClick={handleNextAnimal} style={{ color: "red" }}>
            Next Animal
          </button> */}
          <ProfileImages animalName={"yvette"} amountOfImages={4} />
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
          >
            <NameCard
              name={currentAnimal?.naam || data[currentAnimalId].naam}
              age={10}
            />
            <ButtonGroup
              paw={currentAnimal?.soort || data[currentAnimalId].soort}
              handleClick={handleNextAnimal}
            />
            <ProfileInfo
              content={
                currentAnimal?.opmerkingen || data[currentAnimalId].opmerkingen
              }
            />
          </div>
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
