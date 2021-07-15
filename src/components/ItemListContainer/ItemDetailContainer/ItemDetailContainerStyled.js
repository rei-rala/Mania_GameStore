import styled from "styled-components";

export const ItemDetailContainerStyled = styled.div`
  

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  padding: 2rem 1rem ;
  background-color: #fa9f42;
  border: 2px solid #5e5ed9;
  border-radius: 1rem;
  row-gap: 1rem;

  z-index: 10;

  p:last-child {
    margin: auto;
    width: 85%;
  }
  img {
    width: 15rem;
    -webkit-box-reflect: below 0 linear-gradient( transparent 90%, white 100%);
  }

  .ProductInformationBody {
    display: inherit;
    flex-flow: inherit;
    align-items: inherit;
    row-gap: 1rem;
    text-align:center;




  }

  .ProductInformationFooter {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    text-align: center;
  }
}
`;
