import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: calc(100% - 2 * 2.5rem);
  max-width: 111rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 3rem;
  @media only screen and (min-width: 1100px) {
    margin: 0 auto;
    grid-template-rows: repeat(3, 25rem);
  }
  @media only screen and (min-width: 1140px) {
    grid-template-rows: repeat(2, 25rem);
  }
  /*
    breakpoints: {
        sm: "screen and (min-width: 578px)",
        md: "screen and (min-width: 768px)",
        lg: "screen and (min-width: 1100px)",
        xl: "screen and (min-width: 1280px)",
      }
    **/
`;

//.container{
//    position: absolute;
//    top: 50%;
//    left: 50%;
//    transform: translate(-50%, -50%);
//
//    display: grid;
//    grid-template-columns: repeat(2, 1fr);
//    grid-gap: 2.5rem;
//}
