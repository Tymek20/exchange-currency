import React, { useEffect, useState } from "react";
import { StyledDisplayDate } from "./styled";

const CurrDate = () => {
    const [topDate, setTopDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTopDate(new Date());
        }, 1 * 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return topDate;
};

const myDate = (topDate) =>
    topDate.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

const myTime = (topDate) =>
    topDate.toLocaleString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

const DisplayClock = () => {

    return (
        <StyledDisplayDate>
            <p>
                Dzisiaj jest {myDate(CurrDate())}, {myTime(CurrDate())}
            </p>
        </StyledDisplayDate>
    );
};

export default DisplayClock;