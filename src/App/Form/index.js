import { useState } from "react";
import currencies from "../Form/Data";
import { StyledButton, StyledField, StyledFooter, StyledResult, StyledConvertedField, StyledLegend, StyledLabel } from "./styled";

console.log("Hello to all visiting developers")

const Form = ({ onName, onResult }) => {
    const [newAmount, setNewAmount] = useState("");
    const [result, setResult] = useState("");
    const [currency, setCurrency] = useState(currencies[0].code)

    const rate = currencies.find(({ code }) =>
        code === currency).rate;

    const code = currencies.find(({ code }) =>
        code === currency).code;

    const calculate = () => {
        setResult(newAmount * rate);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculate();
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <StyledField>
                <StyledLegend>
                    {onName}
                </StyledLegend>
                <p>
                    <StyledLabel>
                        Kwota*
                        <StyledConvertedField
                            value={newAmount}
                            onChange={({ target }) => setNewAmount(target.value)}
                            required type="number"
                            placeholder="Wpisz kwotę"
                            step="0.50"
                        />
                    </StyledLabel>
                </p>
                <div>
                    <StyledLabel>
                        Wybierz walutę:
                        <StyledConvertedField as="select"
                            value={currency}
                            type="number"
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.code}
                                    value={currency.code}
                                >
                                    {currency.name}
                                </option>
                            )))};
                        </StyledConvertedField>
                    </StyledLabel>
                    <StyledFooter>
                        Kurs<strong> {code} - {rate}</strong> na dzień 16.01.2023 źródło NBP.pl
                    </StyledFooter>
                </div>
            </StyledField>
            <StyledButton
                onSubmit={onFormSubmit}
                onClick={calculate}
            >
                Przelicz
            </StyledButton>
            <StyledResult>
                {onResult}
                <strong>
                    {Number(result).toFixed(2)}
                </strong>
            </StyledResult>
        </form>
    )
};

export default Form;