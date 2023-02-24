import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 26px;
    border: none;
    width: 100%;    
    background-color: ${({ theme }) => theme.colors.beige};
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.zombie};
        cursor: pointer;
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.tacha};
    }
`;

export const StyledField = styled.fieldset`
    border: 2px solid ${({ theme }) => theme.colors.black};
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;

export const StyledLegend = styled.legend`
    background-color: ${({ theme }) => theme.colors.beige};
    padding: 15px;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    width: 100%;
    max-width: 300px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.beige};
`;

export const StyledConvertedField = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.mineShaft};
    padding: 10px;
    max-width: 400px;
    width: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.beige};
`;

export const StyledFooter = styled.footer`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.beige};
    margin-top: 20px;
`;

export const StyledResult = styled.p`
    color: ${({ theme }) => theme.colors.beige};
    margin-top: 10px;
`;