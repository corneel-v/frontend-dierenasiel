import React, { useState } from "react";
import { Layout, Button, Input, Select } from "antd";
import { NavLink } from "react-router-dom";
import ProfileName from "../components/mainInfo/ProfileName";
import createForm from "../../api/adoptieform";

const { Header, Content } = Layout;
const { Option } = Select;

const AdoptionForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    let updatedValue = value;

    if (
      name === "gebruikerid" ||
      name === "aantalmenseningezien" ||
      name === "kinderen"
    ) {
      updatedValue = parseInt(value, 10);
    } else if (
      name === "andereDieren" ||
      name === "heeftTuin" ||
      name === "isHuurder" ||
      name === "heeftReedsErvaring"
    ) {
      updatedValue = value === "true";
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async () => {
    try {
      const response = await createForm(formData);
      console.log("Form submitted:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header
        style={{
          backgroundColor: "#CABE8B",
          borderRadius: 25,
          height: 124,
          transform: "translateY(-50px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "-23px",
          padding: "0 20px",
        }}
      >
        <NavLink to="/">
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{
              backgroundColor: "#CABE8B",
              borderRadius: 18,
              borderColor: "white",
              marginLeft: 0,
              marginTop: 65,
              padding: 2,
            }}
          >
            Dieren
          </Button>
        </NavLink>
        <ProfileName
          name={"dierenasiel_gent"}
          transform={"translateY(34px)"}
          width={"100vw"}
        />
      </Header>
      <Content style={{ padding: "20px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <Input
            placeholder="User ID"
            onChange={(e) => handleChange("gebruikerid", e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <Input
            placeholder="Aantal mensen in gezin"
            onChange={(e) =>
              handleChange("aantalmenseningezien", e.target.value)
            }
            style={{ marginBottom: "15px" }}
          />
          <Input
            placeholder="Aantal kinderen"
            onChange={(e) => handleChange("kinderen", e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <Select
            placeholder="Heeft u andere dieren?"
            onChange={(value) => handleChange("andereDieren", value)}
            style={{ width: "100%", marginBottom: "15px" }}
          >
            <Option value="true">Ja</Option>
            <Option value="false">Nee</Option>
          </Select>
          <Select
            placeholder="Heeft u een tuin?"
            onChange={(value) => handleChange("heeftTuin", value)}
            style={{ width: "100%", marginBottom: "15px" }}
          >
            <Option value="true">Ja</Option>
            <Option value="false">Nee</Option>
          </Select>
          <Select
            placeholder="Huurder?"
            onChange={(value) => handleChange("isHuurder", value)}
            style={{ width: "100%", marginBottom: "15px" }}
          >
            <Option value="true">Ja</Option>
            <Option value="false">Nee</Option>
          </Select>
          <Input
            placeholder="Tijd dier alleen thuis"
            onChange={(e) =>
              handleChange("tijdDierAlleenThuis", e.target.value)
            }
            style={{ marginBottom: "15px" }}
          />
          <Select
            placeholder="Reeds ervaring met dieren?"
            onChange={(value) => handleChange("heeftReedsErvaring", value)}
            style={{ width: "100%", marginBottom: "15px" }}
          >
            <Option value="true">Ja</Option>
            <Option value="false">Nee</Option>
          </Select>
          <Input
            placeholder="Uw verwachtingen"
            onChange={(e) => handleChange("verwachtingen", e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <Input
            placeholder="Voorkeuren"
            onChange={(e) => handleChange("voorkeuren", e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            style={{
              backgroundColor: "#CABE8B",
              marginTop: "30px",
              width: "100%",
            }}
          >
            Indienen
          </Button>
        </form>
      </Content>
    </Layout>
  );
};

export default AdoptionForm;
