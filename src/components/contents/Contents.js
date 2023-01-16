import React, { useEffect, useState } from "react";
//import Content from '../content/Content'
import getData from "../data/Data";
import "./Contents-Style";
import { StyleIt } from "./Contents-Style";

const Contents = ({ timeOfTheDay }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData());
    //eslint-disable-next-line
  }, []);
  return (
    <StyleIt>
      {data &&
        data.map(({ id, ...otherDataProps }) => (
          <Content key={id} {...otherDataProps} timeOfTheDay={timeOfTheDay} />
        ))}
    </StyleIt>
  );
};

export default Content;
