import React from "react";
import "./SideBarStyle.js";
import im from "../../images/image-jeremy.png";
import {
  SideBarMain,
  SideBarHeader,
  SideBarHeaderImage,
  SideBarHeaderText,
  SideBarText
} from "./SideBarStyle.js";

const SideBar = ({ timeOfTheDay, setTimeOfTheDay }) => {
  const onClick = (timeOfTheDay) => {
    setTimeOfTheDay(timeOfTheDay);
  };

  return (
    <SideBarMain>
      <SideBarHeader>
        <SideBarHeaderImage>
          <img src={im} alt="Header" className="header__img-pic" />
        </SideBarHeaderImage>

        <SideBarHeaderText>
          <span>
            <b>Report for</b>
          </span>{" "}
          <br />{" "}
          <h1>
            John <br /> Doe
          </h1>
        </SideBarHeaderText>
      </SideBarHeader>

      <SideBarText timeOfTheDay={timeOfTheDay}>
        <span onClick={() => onClick("daily")}>Daily</span>
        <span onClick={() => onClick("weekly")}>Weekly</span>
        <span onClick={() => onClick("monthly")}>Monthly</span>
      </SideBarText>
    </SideBarMain>
  );
};

export default SideBar;
