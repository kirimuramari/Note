import type{Form,DateGroup} from "../../../type/table";

export const getDateKey = (deteString: string) => {
    return deteString.split("T")[0];
}

export const formatMonthDay = (dateString: string) => {
    const date = new Date(dateString);

    const month = String(date.getMonth() +1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");

    return `${month}/${day}`;
};

