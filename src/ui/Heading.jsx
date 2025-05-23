import styled, { css } from "styled-components";

export const Heading = styled.h1`
    ${props =>
            props.type === 'h1' &&
            css`
      font-size: 3rem;
      font-weight: 600;
      color: black;
    `}
    
    ${props =>
      
            props.type === 'h2' &&
            css`
            font-size:2rem;
            font-weight: 600;
            `}
    ${props => 
            props.type === 'h3' && 
            css`
            font-size:2rem;
            font-weight: 500;
            `}
`;

export default Heading