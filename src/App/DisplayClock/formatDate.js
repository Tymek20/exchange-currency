import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const formatDate = () => {
    return format(new Date(), 'eeee, dd LLLL, H:mm:ss', {
        locale: pl,
    })
};