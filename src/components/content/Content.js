import React from "react";

//icons
import iconEllip from "../../images/icon-ellipsis.svg";

import iconExercise from "../../images/icon-exercise.svg";
import iconPlay from "../../images/icon-play.svg";
import iconSelfCare from "../../images/icon-self-care.svg";
import iconSocial from "../../images/icon-social.svg";
import iconStudy from "../../images/icon-study.svg";
import iconWork from "../../images/icon-work.svg";
import {
  StyleContent,
  StyleContentHeader,
  StyleContentTitle,
  StyledCardCurrent,
  StyledCardPrevious
} from "./Style-content.js";

const Content = ({
  title,
  timeframes: { daily, weekly, monthly },
  timeOfTheDay
}) => {
  const capitalize = (str) => {
    let t = "";

    switch (str) {
      case "daily":
        t = "day";
        break;

      case "weekly":
        t = "week";
        break;
      case "monthly":
        t = "month";
        break;
      default:
        t = "none";
    }

    return t.charAt(0).toUpperCase() + t.slice(1);
  };

  return (
    <StyleContent title={title}>
      <StyleContentHeader
        src={
          title === "Exercise"
            ? iconExercise
            : title === "Play"
            ? iconPlay
            : title === "Self Care"
            ? iconSelfCare
            : title === "Social"
            ? iconSocial
            : title === "Study"
            ? iconStudy
            : title === "Work"
            ? iconWork
            : ""
        }
        alt="base on title"
      />

      <StyleContentTitle>
        <div>
          <h2>{title}</h2>
          <img src={iconEllip} alt="icon Ellipsis" />
        </div>

        <div>
          <StyledCardCurrent>
            {timeOfTheDay === "daily"
              ? `${daily.current}`
              : timeOfTheDay === "weekly"
              ? `${weekly.current}`
              : timeOfTheDay === "monthly"
              ? `${monthly.current}`
              : ""}
            {"hrs"}
          </StyledCardCurrent>

          <StyledCardPrevious>
            Last {capitalize(timeOfTheDay)}-{" "}
            {timeOfTheDay === "daily"
              ? `${daily.previous}`
              : timeOfTheDay === "monthly"
              ? `${weekly.previous}`
              : timeOfTheDay === "monthly"
              ? `${monthly.previous}`
              : ""}
            {"hrs"}
          </StyledCardPrevious>
        </div>
      </StyleContentTitle>
    </StyleContent>
  );
};

export default Content;
