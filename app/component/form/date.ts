import type{Form} from "../../../type/table";

export const getDateKey = (deteString: string) => {
    return deteString.split("T")[0];
}

export const formatMonthDay = (dateString: string) => {
    const date = new Date(dateString);

    const month = String(date.getMonth() +1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");

    return `${month}/${day}`;
};

// export const groupBydate = (notes:Form[]):GroupedNotes => {
//     return notes.reduce((acc,note) => {
//         const dateKey = getDateKey(note.day);

//         if (!acc[dateKey]) {
//             acc[dateKey] = [];
//         }
//         acc[dateKey].push(note);
//         return acc;
//     }, {} as GroupedNotes)
// } 