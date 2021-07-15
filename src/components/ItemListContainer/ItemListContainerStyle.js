import styled from "styled-components";

export const ItemListContainerStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  font-family: "Ubuntu", sans-serif;

  padding: 1rem;
  gap: 1.5rem;
  width: 100%;
  padding: 1%;

  & > .loadScreen {
    width: 100%;
    background: black;
    $primaryClr: red;
  }
  
`