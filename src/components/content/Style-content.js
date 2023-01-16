import styled from "styled-components";

export const StyleContent = styled.div`
  background-color: ${({ title }) =>
    title === "Work"
      ? "hsl(15, 100%, 70%)"
      : title === "Play"
      ? "hsl(195, 74%, 62%)"
      : title === "Study"
      ? "hsl(348, 100%, 68%)"
      : title === "Exercise"
      ? "hsl(145, 58%, 55%)"
      : title === "Social"
      ? "hsl(264, 64%, 52%)"
      : title === "Self Care"
      ? "hsl(43, 84%, 65%)"
      : ""};
  border-radius: 1.5rem;
  overflow: hidden;
  min-height: 16rem;
  display: flex;
  align-items: flex-end;
  position: relative;
  cursor: pointer;
`;
export const StyleContentHeader = styled.img`
  position: absolute;
  top: -0.6rem;
  right: 0;
  z-index: 0;
`;

export const StyleContentTitle = styled.div`
    background-color: hsl(235, 46%, 20%);
    width: 100%;
    border-radius: 1.5rem;
    transition: all 800ms ease;
    
    
    position: absolute;
    top: 5rem;
    bottom: 0;
    z-index: 3;
    &:hover{
      background-color: #34397B;
    }
    @media only screen and (min-width: 1100px) {
      height: 20rem;
    }
    div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 2rem 1rem 2rem;
        
        h2 {
          font-size: 1.5rem;
          font-weight: 500;
          @media only screen and (min-width: 1100px) {
            margin-bottom: 2.2rem;
          }
        }
        img {
          cursor: pointer;
        }
      }
    div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 2rem 1rem 2rem;
        @media only screen and (min-width: 1100px) {
          flex-direction: column;
          align-items: flex-start;        }
        }
      }
   
`;

export const StyledCardCurrent = styled.h3`
  font-size: 3.2rem;
  font-weight: 300;
  @media only screen and (min-width: 1100px) {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`;

export const StyledCardPrevious = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.7;
`;
