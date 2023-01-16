import React, { useState, useEffect } from "react";

import Content from "../content/Content";
import SideBar from "../sidebar/SideBar";

import getData from "../data/Data";
import "./Container-style.js";
import { ContainerStyle } from "./Container-style.js";

const Container = () => {
  const [timeOfTheDay, setTimeOfTheDay] = useState("daily");
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <ContainerStyle>
      <SideBar timeOfTheDay={timeOfTheDay} setTimeOfTheDay={setTimeOfTheDay} />

      {data &&
        data.map(({ id, ...otherDataProps }) => (
          <Content key={id} {...otherDataProps} timeOfTheDay={timeOfTheDay} />
        ))}
    </ContainerStyle>
  );
};

export default Container;
