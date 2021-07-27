import styled from "styled-components";


export const ItemPromotedStyled = styled.div`
  animation: ${prop => prop.styledPropStock !== 0 ? '2s promotedCard infinite ease-in-out': 'none'}
  `