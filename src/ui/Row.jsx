import styled, {css} from "styled-components";
import PropTypes from "prop-types";

const Row = styled.div`
    display: flex;
     ${props=> props.type === 'horizontal' && css`
     justify-content: space-between;
     align-items: center;
     ` };
    
    ${props=> props.type === 'vertical' && css`
         flex-direction: column;
         gap: 1.6rem;
     ` };
`


Row.defaultProps = {
    type: 'vertical'
}

Row.propTypes = {
    type: PropTypes.string,
}

export default Row;