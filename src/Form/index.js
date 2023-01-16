import { useState } from "react";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();
    }
   
    return (
        <form 
        className="converter"
        onSubmit = {onFormSubmit}
        >
            <fieldset className="converter__fieldset">
                <legend className="converter__legend">
                    Kantor EUR
                </legend>
                <p>
                    <label className="converter__label">
                        Kwota w EUR*
                        <input
                            value = {amount}
                            className="converter__field"
                            type="number"
                            placeholder="EUR 1-10000"
                            min="1" max="10000"
                            step="0.50"
                            required
                        />
                    </label>
                </p>
                <p>
                    <label className="converter__label">
                        Kurs EUR/PLN
                        <input
                            className="converter__field"
                            type="number"
                            disabled
                            placeholder="4.6686"
                            value="4.6686"
                        />
                    </label>
                </p>
            </fieldset>
        </form>
    )
};

export default Form;