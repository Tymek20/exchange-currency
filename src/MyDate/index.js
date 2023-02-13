import React, { useEffect, useState } from "react";
import "./style.css";

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

const MyDate = (topDate) =>
    topDate.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

const MyTime = (topDate) =>
    topDate.toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

const DisplayClock = () => {

    return (
        <div className="displayDate">
            <p>
                Dzisiaj jest {MyDate(CurrDate())}, {MyTime(CurrDate())}
            </p>
        </div>
    );
};

export default DisplayClock;