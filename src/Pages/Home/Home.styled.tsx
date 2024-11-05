import styled from "styled-components";

export const HomeWrapper = styled.div`
  /* background-color: black; */
  & .c-first {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("../../../public/university_building.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    background-repeat: no-repeat;
  }

  & .c-second {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("../../../public/engineering_student.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    background-repeat: no-repeat;
  }

  & .c-news-bgImg {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1)
      ),
      url("../../../public/engineering_student.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    background-repeat: no-repeat;
  }

  /* & .c-newsHeader::after {
    content: " ";
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: black;
    height: 5px;
    width: 40px;
  } */
`;
