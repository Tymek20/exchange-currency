import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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