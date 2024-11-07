import styled from "styled-components";

export const CampusWrapper = styled.div`
  & .container {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "item1 item2 item3"
      "item4 item5 item5"
      "item4 item5 item5";
  }

  & .item1 {
    grid-area: item1;
    background-color: red;
  }

  & .item2 {
    grid-area: item2;
    background-color: blue;
  }

  & .item3 {
    grid-area: item3;
    background-color: green;
  }

  & .item4 {
    grid-area: item4;
    background-color: black;
  }

  & .item5 {
    grid-area: item5;
    background-color: orange;
  }
`;
