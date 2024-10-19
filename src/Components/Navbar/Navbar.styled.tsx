import styled from "styled-components";
export const SolidNavWrapper = styled.div`
  .active {
    color: green;
  }
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.41);
`;
export const NavbarWrapper = styled.div`
  padding: 0.75rem 0;
`;
export const TopNavbarWrapper = styled.div`
  position: relative;
  color: white;
  background-color: #000000d9;
  padding: 4px 0;

  & ul li:not(li:first-of-type) {
    margin: 5px 10px;
    font-size: small;
    transition-duration: 0.5s;
  }
  & ul li:first-of-type {
    margin: 5px 10px 5px 0;
    font-size: small;
    transition-duration: 0.5s;
  }
  & ul li:hover {
    text-decoration: underline;
  }
`;
export const Search = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  align-items: center;
  & input,
  input:focus {
    width: 100%;
    border: none;
    outline: none;
    color: black;
    padding: 0.5rem;
  }
`;
export const NavDropWrapper = styled.div`
  width: 70%;
  position: absolute;
  top: 182px;
  right: 0%;
`;
