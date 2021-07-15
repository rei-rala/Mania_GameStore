import styled from "styled-components";

export const ItemListStyle = styled.div`
  
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;

  background-color: #222823;
  border: 3px outset #5e5ed9;;
  width: 14rem;
  border-radius: 20px;

  overflow: hidden;
  padding: 0.5rem;

  .itemStock {
    position: relative;
    transform: rotate(-40deg) translate(-30.5%, -135%);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
    background-color: #fa9f42;
    width: 100%;
    border: 1px solid #222823;
    box-shadow: 3px 3px 5px #222823;
    z-index: 1;
  }
  .noStock {
    background-color: #222823;
    border-color: #fa9f42;
    color: #fa9f42;
  }

  .productInfo {
    color: gainsboro ;
    text-align: center;
    transform: translateY(-1rem);

    img {
      border: 3px inset #5e5ed9;
      width: 12rem;
      height: 12rem;
      margin-bottom: 0.5rem;
    }
  }
`;