import "./style.css";

const Result = ({ discription, result }) => {
    return (
        <div className="result">
            {discription}
            <strong className="result--convert">
                {result}
            </strong>
        </div>
    )
};

export default Result;