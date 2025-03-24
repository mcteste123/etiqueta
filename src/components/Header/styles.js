import styled from "styled-components";

export const Head = styled.header`
    background-color: #4272EA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    img {
        width: 150px;
    }

    strong {
        font-size: 20px;
        color: #fff;
        cursor: pointer;
    }
    
    @media print {
    & {
        display: none !important;
    }
}
`;