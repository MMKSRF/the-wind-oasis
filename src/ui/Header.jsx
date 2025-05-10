import styled from "styled-components";


const StleadHeader = styled.header`
    background-color: var(--color-grey-0); ;
    padding: 4rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100); 
`
const Header = () => {
    return (
        <StleadHeader>
            Header
        </StleadHeader>
    );
};

export default Header;