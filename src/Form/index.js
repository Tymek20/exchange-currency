import { useState } from "react";
import "./style.css";

const Form = ({ onName, onResult }) => {
    const [newAmount, setNewAmount] = useState("");
    const currency = 4.7004;
    const [result, setResult] = useState("");

    const calculate = () => {
        setResult(newAmount * currency);
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
                        Kwota w EUR*
                        <input
                            value={newAmount}
                            onChange={({ target }) => setNewAmount(target.value)}
                            className="converter__field"
                            required type="number"
                            placeholder="Wpisz kwotę w Euro"
                            step="0.50"
                        />
                    </label>
                </p>
                <p>
                    <label className="converter__label">
                        Kurs EUR/PLN
                        <input
                            className="converter__field"
                            disabled
                            value={currency}
                            type="number"
                        />
                    </label>
                    <p className="footer">
                        Kurs na dzień 16.01.2023 źródło NBP.pl
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