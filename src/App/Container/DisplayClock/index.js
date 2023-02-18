import { StyledDisplayDate } from "./styled";
import { useCurrDate, formatDate } from "./useCurrDate";

const DisplayClock = () => {
    const date = useCurrDate();
    return (
        <StyledDisplayDate>
            <p>
                Dzisiaj jest {formatDate(date)}
            </p>
        </StyledDisplayDate>
    );
};

export default DisplayClock;