import { useState } from "react";
import "./style.css";
import currencies from "../Data";

const Form = ({ onName, onResult }) => {
    const [newAmount, setNewAmount] = useState("");
    const [result, setResult] = useState("");
    const [currency, setCurrency] = useState(currencies[0].code)

    const rate = currencies.find(({ code }) =>
        code === currency).rate;

        const code = currencies.find(( {code }) =>
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
            className="converter"
            onSubmit={onFormSubmit}
        >
            <fieldset className="converter__fieldset">
                <legend className="converter__legend">
                    {onName}
                </legend>
                <p>
                    <label className="converter__label">
                        Kwota*
                        <input
                            value={newAmount}
                            onChange={({ target }) => setNewAmount(target.value)}
                            className="converter__field"
                            required type="number"
                            placeholder="Wpisz kwotę"
                            step="0.50"
                        />
                    </label>
                </p>
                <p>
                    <label className="converter__label">
                        Wybierz walutę:
                        <select
                            className="converter__field"
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
                        </select>
                    </label>
                    <p className="footer">
                        Kurs<strong> {code} - {rate}</strong> na dzień 16.01.2023 źródło NBP.pl
                    </p>
                </p>
            </fieldset>
            <button
                className="button"
                onSubmit={onFormSubmit}
                onClick={calculate}
            >
                Przelicz
            </button>
            <p className="result">
                {onResult}
                <strong
                    className="result--convert"
                >
                    {Number(result).toFixed(2)}
                </strong>
            </p>
        </form>
    )
};

export default Form;