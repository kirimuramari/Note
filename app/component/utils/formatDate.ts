
export const getDateKey = (dateString: string) => {
    return dateString.split("T")[0];
}

export const formatMonthDay = (dateString: string) => {
    const date = new Date(dateString);

    const month = String(date.getMonth() +1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");

    return `${month}/${day}`;
};

