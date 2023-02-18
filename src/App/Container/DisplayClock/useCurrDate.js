import { useState, useEffect } from "react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const useCurrDate = () => {
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

export const formatDate = () => {
    return format(new Date(), 'eeee, dd LLLL, H:mm:ss', {
        locale: pl,
    })
};