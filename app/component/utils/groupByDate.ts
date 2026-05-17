import { Form } from "@/type/type";
import { getDateKey } from "./formatDate";

export type DateGroup = {
    date: string;
    items: Form[];
};

export const groupByDate = (
    notes: Form[]
): DateGroup[] => {
    const grouped: Record<string, Form[]> = {};

    notes.forEach((note) => {
        const date = getDateKey(note.day);
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(note);
    });
    return Object.entries(grouped)
    .map(([date, items]) => ({
            date,
            items,
        }))
        .sort((a, b) =>
            b.date.localeCompare(a.date)
    );
}; 