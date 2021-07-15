import styled from "styled-components";

export const ItemCountContainerStyle = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;

  .editQuantity {
    cursor: pointer;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #5e5ed9;
    color: #fa9f42;
    border-color: #fa9f42;
  }

  .prodQuantity {
    height: 3rem;
    color: #5e5ed9;
    width: 40%;
    border-radius: 5px;
    text-align: center;
  }

  ${props => {
    let customStyle = '';

    if (props.top === 0) {
      if (props.actual === props.top) {
        customStyle = `& > button {
            border: 1px outset #fa9f42;
            cursor: not - allowed;
            filter: grayscale(1);
          }`
      }
    }
    else {
      if (props.actual === 0) {
        customStyle = `& :first-child {
          border: 1px outset #fa9f42;
          cursor: not - allowed;
          filter: grayscale(1);
        }`
      }
      else if (props.actual === props.top) {
        customStyle = `& :last-child {
          border: 1px outset #fa9f42;
          cursor: not - allowed;
          filter: grayscale(1);
        }`
      }
    }
    return customStyle
  }
  }
`