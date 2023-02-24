import { StyledDisplayDate } from "./styled";
import { useCurrentDate, formatDate } from "./useCurrentDate";

const DisplayClock = () => {
    const date = useCurrentDate();
    return (
        <StyledDisplayDate>
            <p>
                Dzisiaj jest {formatDate(date)}
            </p>
        </StyledDisplayDate>
    );
};

export default DisplayClock;