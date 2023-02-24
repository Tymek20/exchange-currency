import { StyledDisplayDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { formatDate } from "./formatDate";

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