import styled from "styled-components";

export const SideBarMain = styled.div`
  background-color: #0e1e38;
  overflow: hidden;
  grid-row: 1 / 3;
`;

export const SideBarHeader = styled.div`
  background-color: #34397b;
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1100px) {
    padding-bottom: 8.5rem;
  }
  @media only screen and (min-width: 578px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SideBarHeaderImage = styled.div`
  width: 7rem;
  height: 7rem;
  border: 0.2rem solid #fff;
  border-radius: 50%;
  margin-right: 1.7rem;
  @media only screen and (min-width: 578px) {
    margin-right: 0rem;
    margin-bottom: 1.7rem;
  }
  @media only screen and (min-width: 1100px) {
    width: 8.5rem;
    height: 8.5rem;
    margin-bottom: 3.9rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SideBarHeaderText = styled.div`
  span {
    font-size: 1.6rem;
    opacity: 0.8;
  }
  h1 {
    font-weight: 300;
    font-size: 2.4rem;
    margin-top: 0.5rem;
    @media only screen and (min-width: 1100px) {
      font-size: 4rem;
    }
  }
`;

export const SideBarText = styled.div`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  margin: 0;
  @media only screen and (min-width: 578px) {
    flex-direction: column;
  }
  ${({ timeOfTheDay }) =>
    timeOfTheDay === "daily"
      ? "span:first-child{color: white;}"
      : timeOfTheDay === "weekly"
      ? "span:nth-child(2){color: white;}"
      : timeOfTheDay === "monthly"
      ? "span:last-child{color: white;}"
      : ""}
  span {
    font-size: 3rem;
    color: gray;
    transition: color 800ms ease;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;
