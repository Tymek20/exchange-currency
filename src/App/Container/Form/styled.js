import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 26px;
    border: none;
    width: 100%;    
    background-color: beige;
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;

    &:hover {
    background-color: hsl(60, 56%, 71%);
    cursor: pointer;
    }

    &:active {
    background-color: hsl(60, 56%, 60%);
    }
`;

export const StyledField = styled.fieldset`
    border: 2px solid black;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;

export const StyledLegend = styled.legend`
    background-color: beige;
    padding: 15px;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    width: 100%;
    max-width: 300px;
    display: inline-block;
    color: beige;
`;

export const StyledConvertedField = styled.input`
    border: 2px solid hsla(0, 5%, 21%, 0.466);
    padding: 10px;
    max-width: 400px;
    width: 100%;
    border-radius: 5px;
    background-color: beige;
`;

export const StyledFooter = styled.footer`
    font-size: 15px;
    color: beige;
    margin-top: 20px;
`;

export const StyledResult = styled.p`
    color: beige;
    margin-top: 10px;
`;