import { useState, useEffect } from "react";
import { Layout, Button } from "antd";
import ProfileName from "../components/mainInfo/ProfileName";
import ProfileImages from "../components/mainInfo/ProfileImages";
import NameCard from "../components/mainInfo/NameCard";
import { getAll, getDierById } from "../../api/dier";
import axios from "axios";
import useSWR from "swr";
import ButtonGroup from "../components/mainInfo/ButtonGroup";
import ProfileInfo from "../components/mainInfo/ProfileInfo";
import { UpCircleTwoTone } from "@ant-design/icons";
import InfoContainer from "../components/infoSlider/InfoContainer";
import { NavLink } from "react-router-dom";

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

  const [translateY, setTranslateY] = useState(916);

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
    if (isSwipeUp) {
      console.log("Swiped up");
      setTranslateY(40);
    } else if (isSwipeDown) {
      console.log("Swiped down");
      setTranslateY(916);
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
    setCurrentAnimal(data[currentAnimalId]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Layout style={{ backgroundColor: "white" }}>
        <Header
          style={{
            backgroundColor: "#CABE8B",
            borderRadius: 25,
            height: 124,
            transform: "translateY(-50px)",
            display: "flex",
            justifyItems: "end",
            marginBottom: "-23px",
          }}
        >
          <NavLink to="/adoptieform">
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{
                backgroundColor: "#CABE8B",
                borderRadius: 25,
                borderColor: "white",
                marginLeft: -40,
                marginTop: 65,
                padding: 2,
              }}
            >
              Voorkeur
            </Button>
          </NavLink>
          <ProfileName
            name={"dierenasiel_gent"}
            transform={"translateY(34px)"}
            width={"100vw"}
          />
        </Header>
        <Content>
          <InfoContainer
            translateY={translateY}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            {...(currentAnimal || data[currentAnimalId])}
          />
          <ProfileImages
            animalName={currentAnimal?.naam || data[currentAnimalId].naam}
            amountOfImages={3}
          />
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
          >
            <NameCard
              name={currentAnimal?.naam || data[currentAnimalId].naam}
              birthDate={
                currentAnimal?.geboortedatum ||
                data[currentAnimalId].geboortedatum
              }
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
